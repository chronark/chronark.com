import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "julianogwarp.com",
		template: "%s | julianogwarp.com",
	},
	description: "Software engineer at",
	openGraph: {
		title: "julianogwarp.com",
		description:
			"Software engineer at ",
		url: "https://julianogwarp.com",
		siteName: "julianogwarp.com",
		images: [
			{
				url: "https://julianogwarp.com/og.png",
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
		title: "Julianogwarp",
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
    <html
    	style={{ scrollBehavior: "smooth" }}
    	lang="en"
    	className={[inter.variable, calSans.variable].join(" ") }
    >
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-zinc-50 ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
