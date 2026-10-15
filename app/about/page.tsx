import { Navigation } from "../components/nav";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Technical deal origination and AI automation. Jacob Yi builds sourcing, research, and outbound systems for private equity, acquisition entrepreneurs, and B2B operators.',
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  return (
  <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        <Navigation />
        <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
          <div className="max-w-2xl mx-auto my-4 lg:mx-0">
            <h2
              className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl"
              style={{ marginTop: "75px" }}
            >
              About
            </h2>
            <p className="mt-4 text-zinc-400">
              I'm Jacob Yi. I build the systems that find, research, and open
              conversations with acquisition targets. Most of that work sits
              behind deal origination: a buying box turned into a live target
              list, enrichment pipelines that fill in the data a deal actually
              needs, and outbound infrastructure that tracks every touch.
            </p>
            <p className="mt-4 text-zinc-400">
              Today I run Bull Holdings, where I build deal origination
              infrastructure for active private equity and add-on mandates, and
              Coverable, AI-native workflow software for immigration law firms. I
              also build custom CRMs, lead research tooling, outbound automation,
              and internal tools for small teams. My background is software
              engineering, so I do the build myself instead of handing off a
              spec.
            </p>
            <p className="mt-4 text-zinc-400">
              Outside of work, my Christian faith gives me purpose and a sense of
              belonging, and my family is my foundation. I travel, run, and read
              when I can. The three words that opened this site still hold:
              Christian, contrarian, stoic.
            </p>
            <div className="flex mt-3">
              <div className="pb-4 z-10 flex flex-col items-center">
                <a
                  href={`/blog/introduction`}
                  className="text-white border border-white rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none hover:bg-white hover:text-black"
                >
                  Introduction
                </a>
              </div>
              <div className="pb-4 z-10 flex flex-col items-center">
                <a
                  href={`/blog/jacobs-identities`}
                  className="text-white border border-white rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none hover:bg-white hover:text-black"
                >
                  Frameworks of My Identity
                </a>
              </div>
              <div className="pb-4 z-10 flex flex-col items-center">
                <a
                  href={`/blog/jacobs-hobbies`}
                  className="text-white border border-white rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none hover:bg-white hover:text-black"
                >
                  Discovering My World
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
