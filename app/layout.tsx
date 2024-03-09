import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "HashTeck | Soluções Tech",
    template: "%s | HashTeck | Soluções Tech",
  },
  description: "Site da Hashteck Soluções Tecnologicas",
  openGraph: {
    title: "HashTeck | Soluções Tech",
    description:
      "Site da Hashteck Soluções Tecnologicas",
    url: "https://hashteck.app.vercel",
    siteName: "HashTeck | Soluções Tech",
    images: [
      {
        url: "https://hashteck.vercel.app/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "pt-BR",
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
    title: "HashTeck",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
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
    <html lang="pt" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-white ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
