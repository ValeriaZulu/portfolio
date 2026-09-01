interface ProjectCardProps {
    title: string
    description: string
    technologies: string[]
    image?: string
    githubUrl: string
    demoUrl?: string
}

function ProjectCard({
    title,
    description,
    technologies,
    image,
    githubUrl,
    demoUrl,
}: ProjectCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-white/5 bg-[#15111c] transition-all duration-500 hover:-translate-y-1 hover:border-[#a970ff]/30 hover:shadow-[0_10px_40px_rgba(169,112,255,0.08)]">

            <div className="grid md:grid-cols-[0.9fr_1.1fr]">

                {/* Project image */}
                <div className="relative aspect-video overflow-hidden bg-[#21182c] md:aspect-auto md:min-h-[280px]">
                    {image ? (
                        <img
                            src={image}
                            alt={`Screenshot of ${title}`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full min-h-[220px] items-center justify-center">
                            <span className="text-sm text-[#aaa2b5]">
                                Project preview
                            </span>
                        </div>
                    )}
                </div>

                {/* Project information */}
                <div className="flex flex-col justify-center p-7 sm:p-8">
                    <h3 className="text-xl font-semibold text-[#f5f1fa] sm:text-2xl">
                        {title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-[#aaa2b5] sm:text-base">
                        {description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-5 flex flex-wrap gap-2">
                        {technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-[#a970ff]/20 bg-[#a970ff]/5 px-3 py-1 text-xs text-[#c99cff]"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="mt-6 flex items-center gap-5 text-sm">
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-[#e7d7ff] transition-colors hover:text-[#c99cff]"
                        >
                            GitHub ↗
                        </a>

                        {demoUrl && (
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-[#e7d7ff] transition-colors hover:text-[#c99cff]"
                            >
                                Live demo ↗
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard