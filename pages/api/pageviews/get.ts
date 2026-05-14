import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/db-connect";
import { PageviewModel } from "../../../utils/pageview-model";

export default async function getPageviews(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== "GET") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	let { slugs } = req.query;

	if (typeof slugs === "string") {
		slugs = (slugs as string).split(",");
	}

	if (!slugs || !Array.isArray(slugs) || slugs.length === 0) {
		return res.status(400).json({ error: "Slugs array is required" });
	}

	try {
		await connect();

		// Fetch pageview counts for all provided slugs
		const pageviews = await PageviewModel.find({
			slug: { $in: slugs },
		});

		// Create a map of slug -> count for easy lookup
		const viewsMap: Record<string, number> = {};
		slugs.forEach((slug) => {
			const pageview = pageviews.find((p) => p.slug === slug);
			viewsMap[slug] = pageview?.count ?? 0;
		});

		return res.status(200).json(viewsMap);
	} catch (e: any) {
		console.error("Pageview fetch error:", e);
		if (e?.message) {
			return res.status(500).json({ error: e.message });
		} else {
			return res.status(500).json({ error: "Internal server error" });
		}
	}
}
