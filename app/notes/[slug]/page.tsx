import { notFound } from "next/navigation";
import { allNotes } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";

import 'katex/dist/katex.min.css';

export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allNotes
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const note = allNotes.find((note) => note.slug === slug);

	if (!note) {
		notFound();
	}

	return (
		<div className="bg-zinc-50 min-h-screen">
			<Header note={note} />
			<ReportView slug={note.slug} />

			<article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
				<Mdx code={note.body.code} />
			</article>
		</div>
	);
}
