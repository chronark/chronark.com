import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { JsonLd } from "./components/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL("https://jacobyi.info"),
  title: {
    default: "Jacob Yi | AI Deal Origination & Automation Systems",
    template: "Jacob Yi | %s",
  },
  description:
    "I build AI-native deal origination, research, and outbound systems for private equity, acquisition entrepreneurs, and B2B operators.",
  openGraph: {
    title: "Jacob Yi | AI Deal Origination & Automation Systems",
    description:
      "I build AI-native deal origination, research, and outbound systems for private equity, acquisition entrepreneurs, and B2B operators.",
    url: "https://jacobyi.info",
    siteName: "jacobyi.info",
    locale: "en-US",
    type: "website",
  },
  alternates: {
    canonical: "/",
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
    title: "Jacob Yi | AI Deal Origination & Automation Systems",
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
    <html lang="en" className={[inter.variable, calSans.variable, "overflow-x-hidden"].join(" ")}>
      <head>
        <Analytics />
        <JsonLd />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
