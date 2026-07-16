import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

// keep the intro in sync with src/pages/index.astro
const intro =
  "I'm the CTO and co-founder of [unkey.com](https://unkey.com), the developer platform for modern APIs. Deploy APIs instantly, route traffic through global gateways, and understand usage in one place.";

export const GET: APIRoute = async () => {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  const list = posts
    .map(
      (post) =>
        `- [${post.data.title}](/blog/${post.id}.md) — ${post.data.date
          .toISOString()
          .slice(0, 10)}`,
    )
    .join("\n");

  const md = `${intro}\n\n## Writing\n\n${list}\n`;
  return new Response(md, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
