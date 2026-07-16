import type { APIRoute } from "astro";
import { renderOgImage } from "../../lib/og";

export const GET: APIRoute = async () => {
  const png = await renderOgImage({
    title: "Andreas Thomas",
    footer: "CTO and co-founder of unkey.com",
  });
  return new Response(png, { headers: { "Content-Type": "image/png" } });
};
