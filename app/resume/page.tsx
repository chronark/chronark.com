import Link from "next/link";
import { Navigation } from "../components/nav";

const experienceList = [
	{
		title: "Software Engineer (under academic supervision)",
		company: "University of South Wales - IT Department",
		location: "Pontypridd, United Kingdom",
		startPeriod: "November 2025",
		endPeriod: "April 2026",
		bullets: [
			"Contributed to building a distributed microservices platform for PhD supervisor allocation using Python, FastAPI, PostgreSQL, pgvector, Docker, SQLAlchemy, Redis caching, React/TypeScript, achieving semantic-matching accuracy.",
			"Assisted in migrating non-core services to C# ASP.NET Core (.NET 9), ensuring backward compatibility with the Python LLM backend and strengthening overall service reliability.",
			"Automated proposal analysis by integrating the OpenAI(ChatGPT) API with prompt-engineering techniques, removing hours of manual review per intake cycle and improving consistency.",
			"Helped design and run end-to-end (E2E) tests with Playwright, gaining experience in simulating user interactions to identify bugs before deployment.",
		],
	},
	{
		title: "Lead Software Engineer",
		company: "Gemstone Technology Solutions",
		location: "Sunderland, United Kingdom",
		startPeriod: "July 2023",
		endPeriod: "March 2026",
		bullets: [
			"Drove ₦65 million in revenue using Javascript/Typescript and NestJS to implement a seamless and secure payment system, incorporating Stripe into our system ensuring a fast transactions and fraud prevention.",
			"Led a team of 3 to build Hubeatz, a cross-platform marketplace used by 400+ buyers and sellers, removing middlemen and increasing seller profits by 25%; delivered end-to-end architecture using TypeScript, React/React Native, Next.js, NestJS, MySQL, and Prisma.",
			"Saved $2,668 in annual file storage costs by migrating from the previous cloud media storage provider to Digital Ocean with AWS S3 support, enabling fund reallocation to marketing, which boosted company revenue.",
			"Configured an AWS EC2 instance with secure SSH access, TCP/IP networking, HTTPS protocols, and an Nginx reverse proxy to ensure reliable connectivity and optimized application performance.",
			"Guided newly recruited developers through the application's working structure, offering timely support and resolving blockers whenever they encountered challenges, enhancing overall teamwork and communication.",
		],
	},
	{
		title: "Senior Software Engineer ",
		company: "Sprungg",
		location: "Lagos, Nigeria",
		startPeriod: "March 2024",
		endPeriod: "October 2024",
		bullets: [
			"Led the development of an all-in-one developer platform by contributing to features such as task management, sprint planning and documentation using Javascript/Typescript, Node.js, Express, MongoDB(NoSQL), React, NextJS, and Tailwind.",
			"Improved code quality and deployment efficiency by implementing a seamless CI/CD pipeline using Docker, Git/GitHub Actions and Workflows, integrating Husky pre-commit hooks to catch issues locally before code reaches remote branches.",
			"Enhanced application stability and user experience by developing a comprehensive end-to-end (E2E) testing suite with Playwright, enabling realistic user simulations to identify bugs and anomalies before deployment.",
			"Built and optimized the organization's core infrastructure on Ubuntu-based Linux servers hosted on AWS (EC2), improving network request routing, memory management, and package updates, ensuring high availability and security",
		],
	},
	{
		title: "Software Engineer ",
		company: "Tomation Solutions",
		location: "Lagos, Nigeria",
		startPeriod: "February 2023",
		endPeriod: "August 2023",
		bullets: [
			"Assisted in designing and developing a content management system for the Manufacturers Association of Nigeria (MAN)using Python, React, Javascript/Typescript, and PostgreSQL, gaining experience in building platforms that support over 1,200 members with access to events, publications, and news, driving ₦5 million in annual revenue.",
			"Drove an estimate of ₦10 million in MAN membership fees by implementing a seamless and secure payment system through the incorporation of various payment systems such as Paystack, Flutterwave and Interswitch into the service, meeting the needs of the various members and ensuring fast transactions.",
			"Helped develop and deploy scalable RESTful APIs with Django/Django REST Framework, Django Templates, Python, and PostgreSQL, gaining exposure to backend development practices and understanding how APIs streamline membership acquisition processes.",
		],
	},
	{
		title: "Software Engineer",
		company: "Emetrics Suite",
		location: "9304 Forest lane, Suite S207 Dallas, Texas 75243",
		startPeriod: "March 2023",
		endPeriod: "August 2023",
		bullets: [
			"Contributed to an HR management solution with task management, real-time notifications, and performance dashboards for individuals, teams, and corporate tracking. Technologies: React, Next.js, Styled-Components, Stitches, PostgreSQL, Django.",
			"Designed an intuitive and visually appealing UI/UX for landing and admin pages to enhance workflow efficiency.",
			"Implemented a secure route protection system to restrict unauthorized access to admin pages using NextAuth and Zustand.",
		],
	},
	{
		title: "Instructor",
		company: "NIIT",
		location: "Lagos, Nigeria",
		startPeriod: "December 2021",
		endPeriod: "May 2023",
		bullets: [
			"Taught Python, SQL, and web development (HTML/CSS), incorporating hands-on exercises and real-world projects, adapting lessons to different learning speeds and backgrounds.",
			"Designed custom lesson plans with interactive coding, group projects to boost engagement and skill development.",
		],
	},
	{
		title: "Python Software Engineer",
		company: "Clever Waters",
		location: "Lagos, Nigeria",
		startPeriod: "Contract - February 2024",
		endPeriod: "October 2024",
		bullets: [
			"Developed a feature-rich ecommerce platform for a fashion and clothing client using Python, Django, Django Templates, TailwindCSS, and MySQL, delivering a robust and scalable solution that improved online shopping accessibility.",
			"Built and deployed the application on PythonAnywhere Cloud hosting with GitHub Actions and Workflows, streamlining CI/CD operations and ensuring reliable, automated deployments that reduced downtime.",
			"Integrated real-time delivery status tracking with HTMX, improving transparency and customer satisfaction by keeping buyers informed throughout the order lifecycle.",
			"Created automated and manual test suites using PyTest, Postman, and Docker, improving API reliability and reducing defects across core workflows.",
		],
	},
];

export default function ResumePage() {
	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				{/* Header */}
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Resume
					</h2>
					<p className="mt-4 text-zinc-400">
						A comprehensive overview of my professional experience, skills, and
						education.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				{/* Professional Summary */}
				<section className="space-y-4">
					<h3 className="text-2xl font-bold text-zinc-100">
						Professional Summary
					</h3>
					<p className="text-zinc-300 leading-relaxed">
						An experienced software engineer who loves open source and creating
						thoughtful, well-designed software.
					</p>

					<p className="text-zinc-300 leading-relaxed">
						Skilled in C#, Python, C++, Java, TypeScript/JavaScript, and
						SQL/NoSQL databases. My work spans distributed systems, mobile apps,
						and modern backend APIs, and extends into desktop applications and
						low-level software where performance, efficiency, and system-level
						understanding matter.
					</p>

					<p className="text-zinc-300 leading-relaxed">
						Locked in on DSA and sharpening my system design skills and
						mastering{" "}
						<Link
							className="underline"
							href={"https://en.cppreference.com/w/cpp.html"}
							target="_blank"
						>
							C++
						</Link>{" "}
						and{" "}
						<Link
							className="underline"
							href={"https://en.cppreference.com/w/cpp.html"}
							target="_blank"
						>
							Java
						</Link>
						{". "}
						Catch you on the next level-up! 📈
					</p>
				</section>

				{/* Experience */}
				<section className="space-y-6">
					<h3 className="text-2xl font-bold text-zinc-100">Experience</h3>

					<div className="space-y-4 border-l border-zinc-700 pl-6">
						{/* Experience Item */}
						{experienceList.map((experience, experienceIdx) => {
							return (
								<div key={experienceIdx} className="relative">
									<div>
										<div className="flex items-start justify-between">
											<div>
												<h4 className="text-lg font-semibold text-zinc-100">
													{experience.title}
												</h4>
												<p className="text-sm text-zinc-400">
													{experience.company} • {experience.startPeriod} -{" "}
													{experience.endPeriod}
												</p>
											</div>
										</div>
										<ul className="mt-2 space-y-1 text-zinc-300 text-sm list-disc list-inside">
											{experience.bullets.map((bullet, bulletIdx) => {
												return <li key={bulletIdx}>{bullet}</li>;
											})}
										</ul>
									</div>
								</div>
							);
						})}
					</div>
				</section>

				{/* Skills */}
				<section className="space-y-6">
					<h3 className="text-2xl font-bold text-zinc-100">Skills</h3>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Skill Category */}
						<div className="space-y-3">
							<h4 className="font-semibold text-zinc-100">
								Languages & Frameworks
							</h4>
							<div className="flex flex-wrap gap-2">
								{[
									"JavaScript/Typescript",
									"Python",
									"C++",
									"Java",
									"Kotlin",
									"SQL",
									"HTML/CSS",
									"GraphQL",
									"React",
									"React Native",
									"Redux/Redux Toolkit",
									"Jest",
									"PyTest",
									"JUnit",
									"Mockito",
									"Spring/Spring Boot",
									"Spring Boot",
									"Playwright",
									"TailwindCSS",
									"Node.js",
									"NestJS",
									"Next.js",
									"Express",
									"Django/Django REST Framework",
									"FastAPI",
									"Jetpack Compose",
									"Prisma",
								].map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 bg-zinc-800 text-zinc-200 text-sm rounded-full"
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						{/* Skill Category */}
						<div className="space-y-3">
							<h4 className="font-semibold text-zinc-100">Tools & Platforms</h4>
							<div className="flex flex-wrap gap-2">
								{[
									"Git",
									"CMake",
									"CI/CD(GitHub Actions & Workflows)",
									"AWS",
									"Docker",
									"Google Cloud Platform(GCP)",
									"Digital Ocean",
								].map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 bg-zinc-800 text-zinc-200 text-sm rounded-full"
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						{/* Skill Category */}
						<div className="space-y-3">
							<h4 className="font-semibold text-zinc-100">Databases</h4>
							<div className="flex flex-wrap gap-2">
								{["PostgreSQL", "MySQL", "MongoDB", "Redis", "MSSQL"].map(
									(skill) => (
										<span
											key={skill}
											className="px-3 py-1 bg-zinc-800 text-zinc-200 text-sm rounded-full"
										>
											{skill}
										</span>
									),
								)}
							</div>
						</div>

						{/* Skill Category */}
						<div className="space-y-3">
							<h4 className="font-semibold text-zinc-100">Soft Skills</h4>
							<div className="flex flex-wrap gap-2">
								{[
									"Leadership",
									"Communication",
									"Problem Solving",
									"Team Work",
									"Learning",
									"Adaptability",
									"Accountability",
									"Collaboration",
								].map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 bg-zinc-800 text-zinc-200 text-sm rounded-full"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Education */}
				<section className="space-y-6">
					<h3 className="text-2xl font-bold text-zinc-100">Education</h3>

					<div className="space-y-4 border-l border-zinc-700 pl-6">
						<div className="relative">
							<div>
								<h4 className="text-lg font-semibold text-zinc-100">
									Master of Science in Advanced Computer Science
								</h4>
								<p className="text-sm text-zinc-400">
									University of South Wales • Graduating September 2026
								</p>
								<p className="mt-1 text-zinc-300 text-sm">
									First-Class Honours <b>Expected</b> • Relevant Coursework:
									Object Oriented Programming with Data Structures and
									Algorithms, Data Mining, Mobile Application Development
								</p>
							</div>
						</div>

						<div className="relative">
							<div>
								<h4 className="text-lg font-semibold text-zinc-100">
									Bachelor of Science (Honours) in Applied Computing
								</h4>
								<p className="text-sm text-zinc-400">
									University of South Wales • Graduated June 2025
								</p>
								<p className="mt-1 text-zinc-300 text-sm">
									First-Class Honours • Relevant Coursework: Advanced Databases
									and Modelling, GIS and the Spatial Web, Advanced Internet and
									Mobile Computing
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Certifications */}
				{/* <section className="space-y-6">
          <h3 className="text-2xl font-bold text-zinc-100">Certifications</h3>

          <div className="space-y-3">
            {[
              {
                name: "AWS Certified Solutions Architect",
                issuer: "Amazon Web Services",
              },
              {
                name: "Certified Kubernetes Administrator",
                issuer: "Cloud Native Computing Foundation",
              },
            ].map((cert) => (
              <div
                key={cert.name}
                className="p-4 bg-zinc-900 rounded-lg border border-zinc-800"
              >
                <h4 className="font-semibold text-zinc-100">{cert.name}</h4>
                <p className="text-sm text-zinc-400">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </section> */}
			</div>
		</div>
	);
}
