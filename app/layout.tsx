import Image from "next/image";
import Link from "next/link";
import "../global.css";
import { Inter, Hanken_Grotesk } from "@next/font/google";
// import font from "@next/font/local";
// const pangea = font({
// 	src: [
// 		{
// 			path: "../public/fonts/PangeaAfrikanTrial-Light.woff2",
// 			weight: "100",
// 			style: "normal",
// 		},
// 		{
// 			path: "../public/fonts/PangeaAfrikanTrial-Regular.woff2",
// 			weight: "300",
// 			style: "normal",
// 		},
// 		{
// 			path: "../public/fonts/PangeaAfrikanTrial-Medium.woff2",
// 			weight: "500",
// 			style: "normal",
// 		},
// 		{
// 			path: "../public/fonts/PangeaAfrikanTrial-SemiBold.woff2",
// 			weight: "700",
// 			style: "normal",
// 		},
// 		{
// 			path: "../public/fonts/PangeaAfrikanTrial-Bold.woff2",
// 			weight: "900",
// 			style: "normal",
// 		},
// 	],
// 	variable: "--font-pangea",
// });

export const metadata = {
	title: "chronark.com",
	description: "The personal website of chronark",
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
