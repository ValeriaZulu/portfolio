import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const featuredProjects = projects.filter((project) => project.featured)
const otherProjects = projects.filter((project) => !project.featured)

function Projects() {
    return (
        <main className="min-h-screen px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-16 max-w-3xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#a970ff]">
                        Projects
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight text-[#f5f1fa] sm:text-5xl">
                        Things I've built
                    </h1>

                    <p className="mt-5 text-base leading-7 text-[#aaa2b5] sm:text-lg">
                        A selection of projects I've worked on throughout my studies,
                        exploring software development, data, databases, mobile
                        applications, and software architecture.
                    </p>
                </div>

                {/* Featured projects */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#f5f1fa]">
                            Featured projects
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {featuredProjects.map((project) => (
                            <ProjectCard
                                key={project.title}
                                {...project}
                                variant="featured"
                            />
                        ))}
                    </div>
                </section>

                {/* Other projects */}
                {otherProjects.length > 0 && (
                    <section className="mt-20">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-[#f5f1fa]">
                                Other projects
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {otherProjects.map((project) => (
                                <ProjectCard
                                    key={project.title}
                                    {...project}
                                    variant="compact"
                                />
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </main>
    )
}

export default Projects