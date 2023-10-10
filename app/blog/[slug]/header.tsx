"use client";
import { ArrowLeft, Eye, Github, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  blog: {
    title: string;
    description: string;
    publish_date: string;
    last_update_date?: string;
    author?: string;
    tags: string;
    previous?: string;
    next?: string;
  };

  views: number;
};

export const Header: React.FC<Props> = ({ blog: blog, views }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const tags = blog.tags.split(";");

  return (
    <header
      ref={ref}
      className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black"
    >
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-white/10  border-zinc-200 lg:border-transparent"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <span
              title="View counter for this page"
              className={`duration-200 hover:font-medium flex items-center gap-1 ${
                isIntersecting
                  ? " text-zinc-400 hover:text-zinc-100"
                  : "text-zinc-600 hover:text-zinc-900"
              } `}
            >
              <Eye className="w-5 h-5" />{" "}
              {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                views
              )}
            </span>
            <Link target="_blank" href="https://twitter.com/hadi_samadzad">
              <Twitter
                className={`w-6 h-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                } `}
              />
            </Link>
            <Link target="_blank" href="https://github.com/hadisamadzad">
              <Github
                className={`w-6 h-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                } `}
              />
            </Link>
          </div>

          <Link
            href="/blog"
            className={`duration-200 hover:font-medium ${
              isIntersecting
                ? " text-zinc-400 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900"
            } `}
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="container mx-auto relative isolate overflow-hidden pt-28 pb-40">
        <div className="mx-auto max-w-6xl px-20 text-center flex flex-col items-center">
          <time className="text-zinc-400 mb-3" dateTime={blog.publish_date}>
            {new Date(blog.publish_date).toDateString()}
            <br />
            <span className="text-sm text-zinc-500">
              {blog.last_update_date &&
                ` Last Update: ${new Date(blog.publish_date).toDateString()}`}
            </span>
          </time>
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-zinc-300 to-zinc-100 text-transparent bg-clip-text">
            {blog.title}
          </h1>
          <p className="mt-6 text-zinc-300">{blog.description}</p>
          <p className="absolute bottom-10">
            {tags.map((x) => (
              <span className="rounded-br-lg mx-2 px-4 py-2 bg-lime-600/10 text-lime-200">
                {x}
              </span>
            ))}
          </p>
        </div>
      </div>
    </header>
  );
};
