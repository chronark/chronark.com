import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
// import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.morenikejipopoola.com"),
	title: {
		default: "morenikejipopoola.com",
		template: "%s | morenikejipopoola.com",
	},
	description:
		"Elijah Popoola, an experienced software engineer who loves open source and creating thoughtful, well-designed software. Skilled in C#, Python, C++, Java, TypeScript/JavaScript, and SQL/NoSQL databases.",
	openGraph: {
		title: "morenikejipopoola.com",
		description:
			"Elijah Popoola, an experienced software engineer who loves open source and creating thoughtful, well-designed software.",
		url: "https://morenikejipopoola.com",
		siteName: "morenikejipopoola.com",
		images: [
			{
				url: "https://morenikejipopoola.com/og-image.png",
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
		title: "Elijah Popoola",
		card: "summary_large_image",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<link
					rel="icon"
					type="image/png"
					href="/favicon-32x32.png"
					sizes="32x32"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/favicon-16x16.png"
					sizes="16x16"
				/>
				{/* <Analytics /> */}
			</head>
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
