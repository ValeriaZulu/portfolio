import { useLanguage } from '../i18n/LanguageContext'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const featuredProjects = projects.filter((project) => project.featured)
const otherProjects = projects.filter((project) => !project.featured)

function Projects() {
    const { t } = useLanguage()

    return (
        <main className="min-h-screen px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-16 max-w-3xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#a970ff]">
                        {t.projects.pageLabel}
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight text-[#f5f1fa] sm:text-5xl">
                        {t.projects.pageTitle}
                    </h1>

                    <p className="mt-5 text-base leading-7 text-[#aaa2b5] sm:text-lg">
                        {t.projects.pageDescription}
                    </p>
                </div>

                {/* Featured projects */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#f5f1fa]">
                            {t.projects.featured}
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
                                {t.projects.other}
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