import { allProjects } from 'contentlayer/generated';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Card } from './components/card';
import { Navigation } from './components/nav';
import { Article } from './projects/article';
import Particles from './components/particles';

export const revalidate = 60;
export default async function ProjectsPage() {
	const featured = allProjects.find((project) => project.slug === "planetfall")!;
	const top2 = allProjects.find((project) => project.slug === "planetfall")!;
	const top3 = allProjects.find((project) => project.slug === "upstash-auth-analytics")!;
	const sorted = allProjects
		.filter((p) => p.published)
		.filter(
			(project) =>
				project.slug !== featured.slug &&
				project.slug !== top2.slug &&
				project.slug !== top3.slug,
		)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
				<div className="max-w-6xl mx-auto lg:mx-0 pt-48">
					<h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-7xl">
						Juliano Grendene.
					</h1>
					<h1 className="text-3xl font-semi-bold tracking-tight text-zinc-900 sm:text-7xl">
						 Software developer &  UI/UX designer.
					</h1>
					
					
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					<Card>
						<Link href={`/projects/${featured.slug}`}>
							<article className="relative w-full h-full p-4 md:p-8">
								<div className="flex items-center justify-between gap-2">
									<div className="text-xs text-zinc-100">
										{featured.date ? (
											<time dateTime={new Date(featured.date).toISOString()}>
												{Intl.DateTimeFormat(undefined, {
													dateStyle: "medium",
												}).format(new Date(featured.date))}
											</time>
										) : (
											<span>SOON</span>
										)}
									</div>		
								</div>
								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-700 group-hover:text-zinc-900 sm:text-4xl font-display"
								>
									{featured.title}
								</h2>
								<p className="mt-4 mb-8 leading-8 duration-150 text-zinc-700 group-hover:text-zinc-300 ">
									{featured.description}
								</p>
								<Image 
				alt="blog"
				width={300}
				height={300}
				src={featured.image ? featured.image : 'favicon.png'}
				/>
								<div className="absolute bottom-4 pt-8 md:bottom-8">
									<p className="hidden text-zinc-700 hover:text-zinc-50 lg:block">
										Read more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</article>
						</Link>
					</Card>
<div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
						{[top2, top3].map((project) => (
							<Card key={project.slug}>
								<Article project={project}  />
							</Card>
						))}
					</div>
					
				</div>
				<div className="hidden w-full h-px md:block bg-zinc-800" />

				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 0)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project}  />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 1)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project}  />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 2)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project}  />
								</Card>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
