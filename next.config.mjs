import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		appDir: true,
		mdxRs: true,
		runtime: "edge",
	},
	images: {
		domains: ["pbs.twimg.com"],
	},
};

export default withContentlayer(nextConfig);
