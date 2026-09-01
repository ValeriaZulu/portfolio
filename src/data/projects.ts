

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
    {
        title: 'RECO',
        description:
            'Academic movie and series recommendation application developed as an initial exploration of the project using SpecKit.',
        technologies: ['JavaScript', 'SpecKit'],
        githubUrl: 'https://github.com/ValeriaZulu/RECO',
        featured: false,
        category: 'academic',
    },

    {
        title: 'RECO-DDD',
        description:
            'A second iteration of RECO focused on software architecture and Domain-Driven Design rather than visual development.',
        technologies: ['C#', '.NET', 'DDD', 'PostgreSQL', 'Docker'],
        githubUrl: 'https://github.com/ValeriaZulu/RECO-DDD',
        featured: false,
        category: 'academic',
    },

    {
        title: 'Alquiler de Objetos DDD',
        description:
            'Academic project inspired by rental platforms, developed to explore Domain-Driven Design concepts and software architecture.',
        technologies: ['C#', '.NET', 'DDD'],
        githubUrl: 'https://github.com/Miguearisti14/AlquilerObjetos_DDD',
        featured: false,
        category: 'collaborative',
    },
    {
        title: 'Go Travel',
        description:
            'Interactive travel website featuring an image slider, gallery, contact form, language switching, dark mode and client-side authentication.',
        technologies: ['JavaScript', 'HTML', 'CSS', 'esbuild'],
        githubUrl: 'https://github.com/ValeriaZulu/Taller2',
        demoUrl: 'https://valeriazulu.github.io/Taller2/',
        featured: false,
        category: 'academic',
    },

    {
        title: 'P2P File Sharing System',
        description:
            'Distributed and decentralized file-sharing system using REST and gRPC microservices, with Docker support and fault tolerance.',
        technologies: ['Python', 'REST', 'gRPC', 'Docker', 'Microservices'],
        githubUrl: 'https://github.com/ValeriaZulu/taller_p2p',
        featured: false,
        category: 'academic',
    },

    {
        title: 'IoT End Device',
        description:
            'IoT end device based on a LILYGO LoRa 32 for measuring temperature, obtaining GPS position and transmitting data through LoRa.',
        technologies: ['C++', 'LoRa', 'GPS', 'IoT'],
        githubUrl: 'https://github.com/ValeriaZulu/IoT_EndDevices',
        featured: false,
        category: 'academic',
    },
]