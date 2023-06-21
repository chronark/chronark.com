import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "go2moon",
    template: "%s | go2moon!",
  },
  description: "Agencia de publicidad",
  openGraph: {
    title: "go2moon!",
    description:
      "Vemos la publicidad como herramienta para trascender, podemos lograr que tu empresa comience el ascenso",
    url: "https://go2moon.com",
    siteName: "go2moon.com",
    images: [
      {
        url: "https://go2moon.com/og.png",
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
    title: "Go2moon! Agencia de Publicidad",
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

const workSans = LocalFont({
	src: "../public/fonts/WorkSans-Thin.ttf",
	variable: "--font-worksans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
    <html
      lang="en"
      className={[
        inter.variable,
        calSans.variable,
        workSans.variable,
      ].join(" ")}
    >
      <head>
        <Analytics />
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
