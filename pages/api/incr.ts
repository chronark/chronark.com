import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../utils/db-connect";
import {
	PageviewModel,
	VisitorDeduplicateModel,
} from "../../utils/pageview-model";

export default async function incrementPageview(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	const { slug } = req.body;

	if (!slug) {
		return res.status(400).json({ error: "Slug is required" });
	}

	try {
		await connect();

		const ip =
			req.headers["x-forwarded-for"] ||
			req.headers["x-real-ip"] ||
			req.socket.remoteAddress ||
			"";
		const ipString = Array.isArray(ip) ? ip[0] : ip;

		if (ipString) {
			// Hash the IP to not store it directly
			const buf = await crypto.subtle.digest(
				"SHA-256",
				new TextEncoder().encode(ipString),
			);
			const hash = Array.from(new Uint8Array(buf))
				.map((b) => b.toString(16).padStart(2, "0"))
				.join("");

			// Check if this IP has already viewed this project today
			const existingRecord = await VisitorDeduplicateModel.findOne({
				hash,
				slug,
			});

			if (existingRecord) {
				// Already counted, return without incrementing
				return res.status(202).send(null);
			}

			// Record this visitor
			await VisitorDeduplicateModel.create({ hash, slug });
		}

		// Increment the pageview count
		await PageviewModel.findOneAndUpdate(
			{ slug },
			{ $inc: { count: 1 } },
			{ upsert: true, new: true },
		);

		return res.status(202).send(null);
	} catch (e: any) {
		console.error("Pageview increment error:", e);
		if (e?.message) {
			return res.status(500).json({ error: e.message });
		} else {
			return res.status(500).json({ error: "Internal server error" });
		}
	}
}
