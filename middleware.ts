import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse, NextFetchEvent } from "next/server";

const redis = Redis.fromEnv();
export const config = {
	runtime: "experimental-edge",
	matcher: "/projects/:slug*",
};

export default async function middleware(
	req: NextRequest,
	evt: NextFetchEvent,
): Promise<NextResponse> {
	const path = new URL(req.url).pathname;
	console.log({ path });

	evt.waitUntil(incrementPageView(req.ip, path));

	return NextResponse.next();
}

async function incrementPageView(
	identifier: string | undefined,
	pathname: string,
): Promise<void> {
	if (identifier) {
		// deduplicate the ip for each slug
		const isNew = await redis.set(
			["deduplicate", identifier, pathname].join(":"),
			true,
			{
				nx: true,
				ex: 24 * 60 * 60,
			},
		);
		if (!isNew) {
			return;
		}
	}
	await redis.incr(["pageviews", pathname].join(":"));
}
