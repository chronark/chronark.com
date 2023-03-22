import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Navigation } from "@/app/components/article-nav";
import "./mdx.css";
import Link from "next/link";

interface PostPageProps {
	params: {
		slug: string;
	};
}

export async function generateStaticParams(): Promise<
	PostPageProps["params"][]
> {
	return allProjects.map((p) => ({
		slug: p.slug,
	}));
}

export default async function PostPage({ params }: PostPageProps) {
	const slug = params?.slug;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-white ">
			<Navigation project={project} />

			<main className=" bg-zinc-50">
				<article className="px-4 py-12 mx-auto prose sm:prose-sm md:prose-md lg:prose-lg text-zinc-600 ">
					<Mdx code={project.body.code} />
				</article>
			</main>
		</div>
	);
}
