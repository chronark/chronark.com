"use client";
import { allProjects } from "contentlayer/generated";
import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import { Card } from "./components/card";
import { BottomCard } from "./components/bottomCard";
import { Navigation } from "./components/nav";
import { Article } from "./article";
import { BottomArticle } from "./bottomArticle";
import Particles from "./components/particles";
import { LucideChevronDown } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "../mainpage.css";

export const revalidate = 60;
export default async function ProjectsPage() {
  const featured = allProjects.find(
    (project) => project.slug === "margin-calculator"
  )!;
  const top2 = allProjects.find((project) => project.slug === "nxr-agro")!;
  const top3 = allProjects.find(
    (project) => project.slug === "x-pos"
  )!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );
  const cardsSectionRef = useRef<HTMLDivElement>(null);
  const scrollToCards = () => {
   
    if (cardsSectionRef.current) {
      cardsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="relative">
      <div className="px-6 pt-22 mx-auto pt-12 space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="main-lettering max-w-6xl pb-80 md:pb-24 mx-auto lg:mx-0">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            I am Juliano Grendene.
          </h1>
          <div className="flex items-center">
            <h1 className="text-xl font-semi-bold tracking-tight align-middle text-zinc-500 md:text-4xl">
              Software Developer & Product Designer.
            </h1>
            <div>
              <button
                onClick={scrollToCards}
                className="flex justify-center items-center rounded-full bg-white/50 backdrop-blur-md ml-4 border align-middle border-gray-200 md:w-7 md:h-7 w-6 h-6"
              >
                <LucideChevronDown />
              </button>
            </div>
          </div>
        </div>

        <div className="flex pt-80 md:pt-42 justify-center"></div>

        <div className="w-full h-px mt-80 md:mt-0 bg-zinc-800" />

        <div
          ref={cardsSectionRef}
          className="grid grid-cols-1 gap-8 mt-80 mx-auto lg:grid-cols-2  "
        >
          <Card>
            <Link href={`/${featured.slug}`}>
              <article className="relative w-full h-full md:p-8 sm:p-8 p-4 cursor-fancy">
                <div className="flex items-center justify-between ">
                  <div className="text-sm text-sky-400">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat("en-US", {
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
                  className="  text-zinc-700  sm:text-3xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="z-20 mt-4 mb-2 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-700 font-sans">
                  {featured.description}
                </p>
                <div className="flex justify-center mt-20">
                  <Image
                    alt="blog"
                    width={650}
                    height={900}
                    src={featured.image ? featured.image : "favicon.png"}
                  />
                </div>
              </article>
            </Link>
          </Card>
          <div className="flex flex-col w-full gap-8 mx-auto border-t  border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            <Card key={top2.slug}>
              {/*NEXAR */}
              <Article project={top2} imgWidth={330} imgHeight={400} />
            </Card>
            {/* XBRI */}
            <Card key={top3.slug}>
              <Article project={top3} imgWidth={500} imgHeight={600} />
            </Card>
          </div>
        </div>

        <div className="mt-2 pb-20">
          <div className="">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <BottomCard key={project.slug}>
                  <BottomArticle
                    project={project}
                    imgWidth={500}
                    imgHeight={600}
                  />
                </BottomCard>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
