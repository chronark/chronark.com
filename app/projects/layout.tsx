export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="bg-gradient-to-tl min-h-screen from-zinc-900 via-zinc-400/10 to-zinc-900">
			{children}
		</div>
	);
}
