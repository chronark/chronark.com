import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
import { Footer } from "@/app/components/footer";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allBlogs
    .filter((x) => x.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const blog = allBlogs.find((x) => x.slug === slug);

  if (!blog) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "blog", slug].join(":"))) ?? 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header blog={blog} views={views} />
      <ReportView slug={blog.slug} />

      <article className="p-4 mx-auto prose prose-zinc prose-quoteless max-w-3xl prose-a:text-pink-700">
        <Mdx code={blog.body.code} />
      </article>
      <Footer />
    </div>
  );
}
