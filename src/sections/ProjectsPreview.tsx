import ProjectCard from '../components/ProjectCard'

const projects = [
    {
        title: 'W8ly',
        description:
            'Offline-first web and mobile application for planning and tracking strength training workouts.',
        technologies: ['React', 'TypeScript'],
        image: 'src/assets/projects/w8ly.png',
        githubUrl: 'https://github.com/dano796/w8ly',
    },
    {
        title: 'FiruFinds',
        description:
            'Mobile application for reporting and finding lost pets, developed as an academic project.',
        technologies: ['React Native', 'Expo', 'Supabase'],
        image: 'src/assets/projects/firufinds.png',
        githubUrl: 'https://github.com/Miguearisti14/FiruFinds',
    },
    {
        title: 'MindMaster',
        description:
            'Interactive trivia game focused on general knowledge, with levels, scoring and player progression.',
        technologies: ['React', 'TypeScript', 'Vite'],
        image: 'src/assets/projects/mindmaster.png',
        githubUrl: 'https://github.com/ValeriaZulu/MindMaster',
    },
    {
        title: 'RECO Android',
        description:
            'Native Android application for movie and series recommendations, developed as a new iteration of the RECO project.',
        technologies: ['Kotlin', 'Jetpack Compose', 'Firebase'],
        image: 'src/assets/projects/reco-android.png',
        githubUrl: 'https://github.com/SantiagoMartinez22/RecoApp',
    },
]

function ProjectsPreview() {
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
                            Selected work
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-[#f5f1fa] sm:text-4xl">
                            Projects I've built
                        </h2>
                    </div>

                    <a
                        href="#"
                        className="text-sm font-medium text-[#c99cff] transition-colors hover:text-[#e7d7ff]"
                    >
                        View all projects ↗
                    </a>
                </div>

                {/* Projects grid */}
                <div className="space-y-6">
                    {projects.map((project) => (
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