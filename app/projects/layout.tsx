export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-zinc-300 via-zinc-100 to-zinc-300 ">
			{children}
		</div>
	);
}
