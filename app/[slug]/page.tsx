import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const project = allProjects.find((project) => project.slug === slug);
	console.log('project', project)
	if (!project) {
		notFound();
	}

	

	return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} />
      <ReportView slug={project.slug} />
      <div className="mb-12">
        <article className="px-4 sm:p-8 mx-auto prose prose-zinc prose-quoteless">
          <Mdx code={project.body.code} />
        </article>
      </div>
    </div>
  );
}
