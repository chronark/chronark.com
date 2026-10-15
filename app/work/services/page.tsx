import Link from "next/link";
import { Metadata } from "next";
import { Navigation } from "../../components/nav";

export const metadata: Metadata = {
  title: "Custom CRM, Research & Outbound Automation",
  description:
    "Deal sourcing systems, AI research agents, outbound infrastructure, custom CRMs, and data pipelines for private equity, acquisition entrepreneurs, and B2B operators.",
};

const technologyCards = [
  {
    title: "Deal Origination Systems",
    items: [
      "Buying box to target list workflows",
      "CRM builds and data schemas",
      "Enrichment and research pipelines",
      "Outbound automation with human review",
    ],
  },
  {
    title: "Ethical Development",
    items: [
      "Values-Aligned Web Development",
      "Privacy-First Applications",
      "Sustainable Software Solutions",
      "Transparent API Development",
    ],
  },
  {
    title: "Purposeful Platforms",
    items: [
      "Ecommerce Platforms",
      "Commodities Trading Dashboards",
      "Client Portal Development",
      "Content Management Systems",
    ],
  },
  {
    title: "Responsible AI & Automation",
    items: [
      "Custom AI agents & multi-step workflows",
      "LLM integration with tools, APIs & data stores",
      "Retrieval & knowledge-grounded assistants",
      "Human-in-the-loop review & governance patterns",
      "Custom SaaS tools & process optimization",
    ],
  },
];

const aiCards = [
  {
    title: "What I deliver",
    items: [
      "Agent playbooks for research, support, and internal ops",
      "Pipelines that connect models to your CRM, docs, and messaging",
      "Evaluation, logging, and rollback-friendly deployments",
      "Staff enablement: prompting, tooling, and safe usage guidelines",
    ],
  },
  {
    title: "How I work",
    items: [
      "Start from outcomes and risk, not buzzwords",
      "Prefer narrow, testable automations before broad autonomy",
      "Keep humans in the loop where stakes are high",
      "Align with your compliance and stewardship expectations",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.jacobyi.info/#jacob",
      name: "Jacob Yi",
      url: "https://www.jacobyi.info",
      jobTitle: "Technical deal origination and AI automation",
      sameAs: [
        "https://www.linkedin.com/in/yi-jacob/",
        "https://github.com/Yi-Jacob",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.jacobyi.info/work/services#service",
      name: "Jacob Yi Consulting",
      url: "https://www.jacobyi.info/work/services",
      description:
        "Deal sourcing systems, AI research agents, outbound infrastructure, custom CRM builds, and data pipelines.",
      provider: { "@id": "https://www.jacobyi.info/#jacob" },
      areaServed: "US",
      serviceType: [
        "Deal origination systems",
        "CRM builds",
        "Outbound automation",
        "Web development",
        "Custom software",
        "AI agents and automation",
      ],
    },
  ],
};

export default function Services() {
  return (
    <div className="relative pb-12 sm:pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <div className="px-4 sm:px-6 pt-16 sm:pt-20 mx-auto space-y-12 max-w-4xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Consulting
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-400">
            I build purpose-driven technology with ethical innovation.
          </p>
        </div>

        {/* Technology Development */}
        <div className="rounded-lg border border-zinc-800 p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
              <span className="text-2xl">💻</span>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
                Technology Development
              </h2>
              <p className="text-zinc-400">
                Purpose-driven technology with ethical innovation
              </p>
            </div>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-8">
            My background in software engineering gives me a real edge. I build digital solutions
            that create efficiency, transparency, and scale while keeping ethical standards
            front and center, including AI-native features, agent workflows, and automation that
            stays reviewable and accountable. From commodities dashboards to bespoke client
            portals, I build with purpose, integrity, and long-term value in mind.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {technologyCards.map(({ title, items }) => (
              <div
                key={title}
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <h3 className="text-lg font-bold text-zinc-100 mb-3">{title}</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  {items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* AI Systems & Agents */}
        <div className="rounded-lg border border-zinc-800 p-6 sm:p-8">
          <p className="text-sm font-semibold text-zinc-500 tracking-wide uppercase mb-2">
            Capability area
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-4">
            AI systems, agents &amp; intelligent automation
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            I design and implement AI-assisted systems for operators who need speed without
            losing control: scoped automations, agent orchestration, and integrations that
            respect privacy, provenance, and approval paths. Engagements range from advisory
            and architecture to hands-on build alongside your team.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {aiCards.map(({ title, items }) => (
              <div
                key={title}
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <h3 className="text-lg font-bold text-zinc-100 mb-3">{title}</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  {items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-8">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-4">
            Have a project in mind?
          </h2>
          <p className="text-zinc-400 mb-6">
            Tell me what you&apos;re building and I&apos;ll let you know if I can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-zinc-100 hover:bg-white text-zinc-900 px-8 py-3 rounded-full font-medium transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
