

export interface Project {
    title: string
    description: string
    technologies: string[]
    image?: string
    githubUrl: string
    demoUrl?: string
    featured: boolean
    category: 'academic' | 'collaborative' | 'personal'
}

export const projects: Project[] = [
    {
        title: 'W8ly',
        description:
            'Offline-first web and mobile application for planning and tracking strength training workouts.',
        technologies: ['React', 'TypeScript'],
        image: 'src/assets/projects/w8ly.png',
        githubUrl: 'https://github.com/dano796/w8ly',
        featured: true,
        category: 'collaborative',
    },

    {
        title: 'FiruFinds',
        description:
            'Mobile application for reporting and finding lost pets, developed as an academic project.',
        technologies: ['React Native', 'Expo', 'Supabase'],
        image: 'src/assets/projects/firufinds.png',
        githubUrl: 'https://github.com/Miguearisti14/FiruFinds',
        featured: true,
        category: 'collaborative',
    },

    {
        title: 'MindMaster',
        description:
            'Interactive trivia game focused on general knowledge, with levels, scoring and player progression.',
        technologies: ['React', 'TypeScript', 'Vite'],
        image: 'src/assets/projects/mindmaster.png',
        githubUrl: 'https://github.com/ValeriaZulu/MindMaster',
        featured: true,
        category: 'academic',
    },

    {
        title: 'RECO Android',
        description:
            'Native Android application for movie and series recommendations, developed as a new iteration of the RECO project.',
        technologies: ['Kotlin', 'Jetpack Compose'],
        image: 'src/assets/projects/reco-android.png',
        githubUrl: 'https://github.com/SantiagoMartinez22/RecoApp',
        featured: true,
        category: 'collaborative',
    },
]