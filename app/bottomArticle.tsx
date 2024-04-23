import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import Image from "next/image"

type Props = {
	project: Project;
	imgWidth: number;
	imgHeight: number;
	
};

export const BottomArticle: React.FC<Props> = ({ project, imgWidth = 450, imgHeight = 900 }) => {
	
	return (
    <article className="flex md:p-8 p-4 ">
      <div className="justify-center">
        <div className="gap-2 items-center">
          <span className="text-sky-400">SOON</span>
        </div>
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-700  font-display">
          {project.title}
        </h2>
        <p className="z-20 mt-4 mb-2 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-700 font-sans">
          {project.description}
        </p>
      </div>
      <div className="flex justify-center align-middle items-center pl-44">
        <Image
          alt="blog"
          width={imgWidth}
          height={imgHeight}
          src={project.image ? project.image : "favicon.png"}
        />
      </div>
    </article>
  );
};
