import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jacob Yi",
    short_name: "Jacob Yi",
    description:
      "I build AI-native deal origination, research, and outbound systems for private equity, acquisition entrepreneurs, and B2B operators.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
