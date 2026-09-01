import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const featuredProjects = projects.filter((project) => project.featured)

function ProjectsPreview() {
    const { t } = useLanguage()

    return (
        <section
            id="projects"
            className="relative px-6 py-18 sm:py-18"
        >
            <div className="mx-auto max-w-6xl">

                {/* Section heading */}
                <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#a970ff]">
                            {t.projects.label}
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-[#f5f1fa] sm:text-4xl">
                            {t.projects.title}
                        </h2>
                    </div>

                    <Link
                        to="/projects"
                        className="text-sm font-medium text-[#c99cff] transition-colors hover:text-[#e7d7ff]"
                    >
                        {t.projects.viewAll}
                    </Link>
                </div>

                {/* Projects */}
                <div className="space-y-6">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default ProjectsPreview