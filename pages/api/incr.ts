import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

async function getRedisClient() {
  try {
    return Redis.fromEnv();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn("Failed to create Redis client from env:", err);
    return null;
  }
}

export default async function incr(req: NextRequest): Promise<NextResponse> {
  if (req.method !== "POST") {
    return new NextResponse("use POST", { status: 405 });
  }
  if (req.headers.get("Content-Type") !== "application/json") {
    return new NextResponse("must be json", { status: 400 });
  }

  const body = await req.json();
  let slug: string | undefined = undefined;
  if ("slug" in body) {
    slug = body.slug;
  }
  if (!slug) {
    return new NextResponse("Slug not found", { status: 400 });
  }

  const redis = await getRedisClient();
  if (!redis) {
    // Redis not configured: respond with 503 so callers know increment didn't happen.
    return new NextResponse("Redis not configured", { status: 503 });
  }

  try {
    const ip = req.ip;
    if (ip) {
      // Hash the IP in order to not store it directly in your db.
      const buf = await crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode(ip),
      );
      const hash = Array.from(new Uint8Array(buf))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      // deduplicate the ip for each slug
      const isNew = await redis.set(["deduplicate", hash, slug].join(":"), true, {
        nx: true,
        ex: 24 * 60 * 60,
      });
      if (!isNew) {
        return new NextResponse(null, { status: 202 });
      }
    }
    await redis.incr(["pageviews", "projects", slug].join(":"));
    return new NextResponse(null, { status: 202 });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Redis operation failed:", err);
    return new NextResponse("Redis error", { status: 500 });
  }
}
