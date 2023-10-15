import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye, View } from "lucide-react";
import Image from "next/image"

type Props = {
	project: Project;
	
};

export const Article: React.FC<Props> = ({ project }) => {
	
	return (
		<Link href={`/projects/${project.slug}`}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-sm duration-500 text-sky-400 group-hover:text-sky-400 group-hover:border-zinc-800 drop-shadow-orange">
						{project.date ? (
							<time dateTime={new Date(project.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(project.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
					
				</div>
				<h2  className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-700  font-display" >
					{project.title}
				</h2>
				<p className="z-20 mt-4 mb-10 text-sm h-20 duration-1000 text-zinc-400 group-hover:text-zinc-700 font-sans">
					{project.description}
				</p>
				<div className="flex justify-center">
				<Image 
				alt="blog"
				width={200}
				height={200}
				src={project.image ? project.image : 'favicon.png'}
				/>
				</div>
			</article>
		</Link>
	);
};
