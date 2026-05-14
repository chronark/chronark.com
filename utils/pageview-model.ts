import mongoose, { Schema, Document } from "mongoose";

export interface PageviewDocument extends Document {
	slug: string;
	count: number;
	updatedAt: Date;
}

export interface VisitorDeduplicateDocument extends Document {
	hash: string;
	slug: string;
	expiresAt: Date;
}

const pageviewSchema = new Schema(
	{
		slug: {
			type: String,
			required: true,
			unique: true,
			index: true,
		},
		count: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true },
);

const visitorDeduplicateSchema = new Schema(
	{
		hash: String,
		slug: String,
		expiresAt: {
			type: Date,
			default: () => new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
			index: { expireAfterSeconds: 0 }, // TTL index
		},
	},
	{ timestamps: true },
);

export const PageviewModel =
	mongoose.models.Pageview ||
	mongoose.model<PageviewDocument>("Pageview", pageviewSchema);

export const VisitorDeduplicateModel =
	mongoose.models.VisitorDeduplicate ||
	mongoose.model<VisitorDeduplicateDocument>(
		"VisitorDeduplicate",
		visitorDeduplicateSchema,
	);
