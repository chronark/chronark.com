import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const proj = allProjects.find((project) => project.slug === slug);
  return {
    title: proj?.title,
    description: proj?.description,
  };
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  // Fetch pageview count from MongoDB API
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/pageviews/get?slugs=${slug}`,
    { cache: "no-store" },
  );

  let views = 0;
  if (response.ok) {
    const data = await response.json();
    views = data[slug] ?? 0;
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={views} />
      <ReportView slug={project.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={project.body.code} />
      </article>
    </div>
  );
}
