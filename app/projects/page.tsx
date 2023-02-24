import Link from "next/link";
import React from "react";

type Project = {
	slug: string;
	title: string;
	description: string;
	href: string;
	date?: string;
};

const projects: Project[] = [
	{
		slug: "upstash-kafka",
		title: "@upstash/kafka",
		href: "https://github.com/upstash/upstash-kafka",
		description:
			"A fully typed Kafka client built for Upstash Kafka and HTTP, perfect for serverless and edge runtimes.",
		date: "2022-01-08",
	},
	{
		slug: "upstash-redis",
		title: "@upstash/redis",
		href: "https://github.com/upstash/upstash-redis",
		description:
			"A fully typed Redis client built for Upstash Redis and HTTP, perfect for serverless and edge runtimes.",
		date: "2022-03-14",
	},
	{
		slug: "upstash-redis",
		title: "@upstash/ratelimit",
		href: "https://github.com/upstash/ratelimit",
		description:
			"Ratelimiting library for serverless and edge runtimes. Built on top of Upstash Redis.",
		date: "2020-06-06",
	},
	{
		slug: "upstash-edge-flags",
		title: "@upstash/edge-flags",
		href: "https://github.com/upstash/edge-flags",
		description: "Feature flags for edge functions.",
		date: "2022-12-12",
	},
	{
		slug: "upstash-cli",
		title: "@upstash/cli",
		href: "https://github.com/upstash/cli",
		description:
			"A CLI to provision and manage Upstash resources, including Redis and Kafka databases.",
		date: "2022-05-16",
	},
	{
		slug: "upstash-react-ui",
		title: "@upstash/react-cli",
		href: "https://github.com/upstash/react-ui",
		description:
			"A CLI React component to interact with Upstash Redis databases.",
		date: "2023-02-05",
	},
	{
		slug: "qstash",
		title: "QStash",
		href: "https://upstash.com/qstash",
		description:
			"QStash is a fully managed serverless queue and messaging service designed for the serverless era.",
		date: "2022-07-18",
	},
	{
		slug: "upstash-qstash-sdk",
		title: "@upstash/qstash",
		href: "https://github.com/upstash/sdk-qstash-ts",
		description: "A typescript client and consumer for QStash.",
		date: "2020-07-18",
	},
	{
		slug: "upstash-core-analytics",
		title: "@upstash/core-analytics",
		href: "https://github.com/upstash/core-analytics",
		description:
			"Low level utilities to build analytics tools on top of Redis.",
		date: "2023-02-13",
	},
	{
		slug: "upstash-auth-analytics",
		title: "@upstash/auth-analytics",
		href: "https://github.com/upstash/auth-analytics",
		description: "A library to record and analyse Auth.js user behaviour",
	},
	{
		slug: "upstash-web-analytics",
		title: "@upstash/web-analytics",
		href: "https://github.com/upstash/auth-analytics",
		description:
			"A library to record and analyse web page traffic and user behaviour",
		date: "2020-03-16",
	},
	{
		slug: "upstash-ratelimit-analytics",
		title: "Ratelimit Analytics",
		href: "https://github.com/upstash/ratelimit",
		description:
			"Near realtime analytics for your ratelimits. Integrated into the @upstash/ratelimit library.",
		date: "2023-03-01",
	},
	{
		slug: "planetfall",
		title: "Planetfall",
		href: "https://planetfall.io",
		description:
			"I'm building a SAAS, that provides global latency monitoring for your APIs and websites from edge locations around the world. Have you ever wondered how fast your API is in any part of the world? Planetfall allows you to find out and monitor it continuously.",
		date: "2023-04-01",
	},
	{
		slug: "terraform-provider-vercel",
		title: "Vercel Terraform Provider",
		href: "https://github.com/chronark/terraform-provider-vercel",
		description:
			"A Terraform provider for Vercel. It has been deprecated it when Vercel rolled out their official provider.",
		date: "2021-03-16",
	},
	{
		slug: "envshare",
		title: "EnvShare",
		href: "https://envshare.dev",
		description:
			"EnvShare is a simple tool to share environment variables securely. It uses AES-GCM to encrypt your data before sending it to the server. The encryption key never leaves your browser.",
		date: "2023-01-16",
	},
	{
		slug: "redis-query",
		title: "Redis Query",
		href: "https://github.com/chronark/redis-query",
		description:
			"Client side secondary indexing for Redis. It allows you to query your Redis data efficiently. Inspired by FaunaDB indices.",
		date: "2023-02-16",
	},
	{
		slug: "access",
		title: "@chronark/access",
		href: "https://github.com/chronark/access",
		description:
			"A minimal library for access control. It is designed to be used together with opaque access tokens by providing a simple interface to define roles with different access permissions and verifying requests to resources.",
		date: "2022-11-13",
	},
];

export default function ProjectsPage() {
	const featured = projects.find((project) => project.slug === "planetfall")!;
	const top2 = projects.find((project) => project.slug === "envshare")!;
	const top3 = projects.find((project) => project.slug === "qstash")!;

	const sorted = projects
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
		<div className="py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8 md:space-y-16">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Projects
					</h2>
					<p className="text-zinc-400 mt-4">
						Some of the projects are from work and some are on my own time.
					</p>
				</div>
				<div className="w-full  h-px bg-zinc-800" />

				<div className="mx-auto grid  grid-cols-1 gap-8  lg:grid-cols-2  ">
					<article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
						<div className="text-zinc-100 text-xs">
							{featured.date ? (
								<time dateTime={new Date(featured.date).toISOString()}>
									{featured.date}
								</time>
							) : (
								<span>SOON</span>
							)}
						</div>
						<h2
							id="featured-post"
							className="mt-4 text-3xl font-bold tracking-tight text-zinc-100 group-hover:text-white   sm:text-4xl"
						>
							{featured.title}
						</h2>
						<p className="mt-4 text-lg leading-8 text-zinc-400 duration-150 group-hover:text-zinc-300">
							{featured.description}
						</p>
						<div className="mt-4">
							<Link
								className="text-zinc-200 hover:text-zinc-50"
								href={`/projects/${featured.slug}`}
							>
								Read more <span aria-hidden="true">&rarr;</span>
							</Link>
						</div>
					</article>
					<div className="mx-auto w-full max-w-2xl flex flex-col gap-8 border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
						{[top2, top3].map((project) => (
							<Card key={project.slug} project={project} />
						))}
					</div>
				</div>
				<div className="w-full hidden md:block  h-px bg-zinc-800" />

				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3">
					{sorted.map((project) => (
						<Card key={project.slug} project={project} />
					))}
				</div>
			</div>
		</div>
	);
}

const Card: React.FC<{ project: Project; border?: boolean }> = ({
	project,
	border,
}) => {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className={`flex max-w-xl flex-col items-start group   duration-200 transition-all py-4 lg:p-4  ${
				border
					? "hover:bg-zinc-900 hover:border-zinc-700 border border-zinc-800 rounded"
					: ""
			} `}
		>
			<div className="text-zinc-100 text-xs">
				{project.date ? (
					<time dateTime={new Date(project.date).toISOString()}>
						{project.date}
					</time>
				) : (
					<span>SOON</span>
				)}
			</div>
			<div className=" relative duration-150">
				<h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-100 group-hover:text-white ">
					<span className="absolute inset-0" />
					{project.title}
				</h3>
				<p className="mt-5 text-sm leading-6 text-zinc-400 line-clamp-3 duration-150 group-hover:text-zinc-300">
					{project.description}
				</p>
			</div>
		</Link>
	);
};
