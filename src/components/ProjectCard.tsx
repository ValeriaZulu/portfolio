import type { Project } from '../data/projects'

interface ProjectCardProps extends Project {
    variant?: 'featured' | 'compact'
}

function ProjectCard({
    title,
    description,
    technologies,
    image,
    githubUrl,
    demoUrl,
    isPrivate,
    variant = 'featured',
}: ProjectCardProps) {
    if (variant === 'compact') {
        return (
            <article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#a970ff]/40 hover:bg-white/[0.05]">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="min-w-0">
                        <h3 className="text-xl font-semibold text-[#f5f1fa]">
                            {title}
                        </h3>

                        <p className="mt-2 max-w-3xl text-sm leading-6 text-[#aaa2b5]">
                            {description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-full border border-[#a970ff]/20 bg-[#a970ff]/10 px-3 py-1 text-xs text-[#c99cff]"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="shrink-0 text-sm font-medium">
                        {isPrivate ? (
                            <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-[#aaa2b5]">
                                🔒 Private Repo
                            </span>
                        ) : githubUrl ? (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#c99cff] transition-colors hover:text-[#f5f1fa]"
                            >
                                GitHub ↗
                            </a>
                        ) : null}
                    </div>
                </div>
            </article>
        )
    }

    return (
        <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-[#a970ff]/40 hover:bg-white/[0.05]">
            <div className="grid md:grid-cols-[280px_1fr]">

                {/* Image */}
                <div className="aspect-video overflow-hidden bg-white/[0.04] md:aspect-auto">
                    {image ? (
                        <img
                            src={image}
                            alt={`${title} project preview`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full min-h-[180px] items-center justify-center">
                            <span className="text-sm text-[#777080]">
                                Project preview
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-6 sm:p-8">
                    <div>
                        <h3 className="text-2xl font-semibold text-[#f5f1fa]">
                            {title}
                        </h3>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#aaa2b5]">
                            {description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-full border border-[#a970ff]/20 bg-[#a970ff]/10 px-3 py-1 text-xs text-[#c99cff]"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-5 text-sm font-medium">
                        {isPrivate ? (
                            <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-[#aaa2b5]">
                                🔒 Private Repository
                            </span>
                        ) : (
                            githubUrl && (
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#c99cff] transition-colors hover:text-[#f5f1fa]"
                                >
                                    GitHub ↗
                                </a>
                            )
                        )}

                        {demoUrl && (
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#c99cff] transition-colors hover:text-[#f5f1fa]"
                            >
                                Live Demo ↗
                            </a>
                        )}
                    </div>
                </div>

            </div>
        </article>
    )
}

export default ProjectCard