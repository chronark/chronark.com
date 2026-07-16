import { readFile } from "node:fs/promises";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

const fontRegular = await readFile(
  "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff",
);
const fontSemiBold = await readFile(
  "node_modules/@fontsource/inter/files/inter-latin-600-normal.woff",
);

interface OgCard {
  title: string;
  footer: string;
}

// the midnight card: near-black, violet glow from the top, hairline frame
export async function renderOgImage({ title, footer }: OgCard) {
  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 50% -30%, rgba(120, 140, 210, 0.25), rgba(10, 10, 10, 0) 65%)",
          fontFamily: "Inter",
          padding: "48px",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "16px",
                padding: "56px 64px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "24px",
                      color: "#6e6e6e",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    },
                    children: "chronark.com",
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "64px",
                      fontWeight: 600,
                      color: "#ededed",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.15,
                      maxWidth: "980px",
                    },
                    children: title,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "24px",
                      color: "#9aa8d8",
                    },
                    children: footer,
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: fontRegular, weight: 400, style: "normal" },
        { name: "Inter", data: fontSemiBold, weight: 600, style: "normal" },
      ],
    },
  );

  return new Resvg(svg).render().asPng();
}
