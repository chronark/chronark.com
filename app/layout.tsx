import "../global.css";
import { Inter, Hanken_Grotesk } from "@next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "chronark.com",
		template: "%s | chronark.com",
	},
	description: "Software engineer at upstash.com and founder of planetfall.io",
	openGraph: {
		title: "chronark.com",
		description:
			"Software engineer at upstash.com and founder of planetfall.io",
		url: "https://chronark.com",
		siteName: "chronark.com",
		images: [
			{
				url: "https://chronark.com/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Chronark",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const grotesk = Hanken_Grotesk({
	subsets: ["latin"],
	variable: "--font-grotesk",
	fallback: ["sans-serif"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, grotesk.variable].join(" ")}>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}
