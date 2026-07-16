import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { id: post.id },
    props: { post },
  }));
}

export const GET: APIRoute = ({ props }) => {
  const { post } = props;
  const date = post.data.date.toISOString().slice(0, 10);
  const md = `# ${post.data.title}\n\n${date}\n\n${post.body?.trim() ?? ""}\n`;
  return new Response(md, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
