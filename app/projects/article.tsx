import sortedProjects from '../../data/projects';

type Props = {
  project: typeof sortedProjects[number];
};

export const Article: React.FC<Props> = ({ project }) => {
  return (
    <article className="p-4 md:p-8">
      <div className="flex justify-between gap-2 items-center">
        <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
          {project.date ? (
            <time dateTime={new Date(project.date).toISOString()}>
              {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                new Date(project.date)
              )}
            </time>
          ) : (
            <span>SOON</span>
          )}
        </span>
      </div>
      <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
        {project.title}
      </h2>
      <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
        {project.description}
      </p>
      <p className="z-20 mt-2 text-sm duration-1000 text-zinc-300 group-hover:text-zinc-200">
        Technologies: {project.technologies}
      </p>
      <div className="mt-4">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-200 underline">GitHub Repo</a>
        {project.deployedUrl && (
          <>
            <span className='text-zinc-200'>{' | '}</span>
            <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-200 underline">Live Demo</a>
          </>
        )}
      </div>
    </article>
  );
};
