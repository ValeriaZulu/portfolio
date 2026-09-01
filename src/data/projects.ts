

export interface Project {
    title: string
    description: {
        en: string
        es: string
    }
    technologies: string[]
    image?: string
    githubUrl?: string
    demoUrl?: string
    featured: boolean
    isPrivate?: boolean
}

export const projects: Project[] = [
    {
        title: 'W8ly',
        description: {
            en: 'Offline-first web and mobile application for planning and tracking strength training workouts.',
            es: 'Aplicación web y móvil offline-first para planificar y hacer seguimiento de rutinas de entrenamiento de fuerza.',
        },
        technologies: ['React', 'TypeScript'],
        image: 'src/assets/projects/w8ly.png',
        githubUrl: 'https://github.com/dano796/w8ly',
        featured: true,
    },

    {
        title: 'FiruFinds',
        description: {
            en: 'Mobile application for reporting and finding lost pets, developed as an academic project.',
            es: 'Aplicación móvil para reportar y encontrar mascotas perdidas, desarrollada como proyecto académico.',
        },
        technologies: ['React Native', 'Expo', 'Supabase'],
        image: 'src/assets/projects/firufinds.png',
        githubUrl: 'https://github.com/Miguearisti14/FiruFinds',
        featured: true,
    },

    {
        title: 'MindMaster',
        description: {
            en: 'Interactive trivia game focused on general knowledge, with levels, scoring and player progression.',
            es: 'Juego de trivia interactivo enfocado en conocimiento general, con niveles, puntuación y progreso del jugador.',
        },
        technologies: ['React', 'TypeScript', 'Vite'],
        image: 'src/assets/projects/mindmaster.png',
        githubUrl: 'https://github.com/ValeriaZulu/MindMaster',
        featured: true,
    },

    {
        title: 'RECO Android',
        description: {
            en: 'Native Android application for movie and series recommendations, developed as a new iteration of the RECO project.',
            es: 'Aplicación nativa para Android que recomienda películas y series, desarrollada como una nueva iteración del proyecto RECO.',
        },
        technologies: ['Kotlin', 'Jetpack Compose'],
        image: 'src/assets/projects/reco-android.png',
        githubUrl: 'https://github.com/SantiagoMartinez22/RecoApp',
        featured: true,
    },
    {
        title: 'RECO',
        description: {
            en: 'Academic movie and series recommendation application developed as an initial exploration of the project using SpecKit.',
            es: 'Aplicación académica de recomendación de películas y series desarrollada como una exploración inicial del proyecto usando SpecKit.',
        },
        technologies: ['JavaScript', 'SpecKit'],
        githubUrl: 'https://github.com/ValeriaZulu/RECO',
        featured: false,
    },

    {
        title: 'RECO-DDD',
        description: {
            en: 'A second iteration of RECO focused on software architecture and Domain-Driven Design rather than visual development.',
            es: 'Una segunda iteración de RECO enfocada en arquitectura de software y Domain-Driven Design en lugar del desarrollo visual.',
        },
        technologies: ['C#', '.NET', 'DDD', 'PostgreSQL', 'Docker'],
        githubUrl: 'https://github.com/ValeriaZulu/RECO-DDD',
        featured: false,
    },

    {
        title: 'Alquiler de Objetos DDD',
        description: {
            en: 'Academic project inspired by rental platforms, developed to explore Domain-Driven Design concepts and software architecture.',
            es: 'Proyecto académico inspirado en plataformas de alquiler, desarrollado para explorar conceptos de Domain-Driven Design y arquitectura de software.',
        },
        technologies: ['C#', '.NET', 'DDD'],
        githubUrl: 'https://github.com/Miguearisti14/AlquilerObjetos_DDD',
        featured: false,
    },
    {
        title: 'Go Travel',
        description: {
            en: 'Interactive travel website featuring an image slider, gallery, contact form, language switching, dark mode and client-side authentication.',
            es: 'Sitio web de viajes interactivo que incluye un slider de imágenes, una galería, un formulario de contacto, cambio de idioma, modo oscuro y autenticación del lado del cliente.',
        },
        technologies: ['JavaScript', 'HTML', 'CSS', 'esbuild'],
        githubUrl: 'https://github.com/ValeriaZulu/Taller2',
        featured: false,
    },

    {
        title: 'P2P File Sharing System',
        description: {
            en: 'Distributed and decentralized file-sharing system using REST and gRPC microservices, with Docker support and fault tolerance.',
            es: 'Sistema de intercambio de archivos distribuido y descentralizado que utiliza microservicios REST y gRPC, con soporte para Docker y tolerancia a fallos.',
        },
        technologies: ['Python', 'REST', 'gRPC', 'Docker', 'Microservices'],
        featured: false,
        isPrivate: true,
    },

    {
        title: 'IoT End Device',
        description: {
            en: 'IoT end device based on a LILYGO LoRa 32 for measuring temperature, obtaining GPS position and transmitting data through LoRa.',
            es: 'Dispositivo final de IoT basado en un LILYGO LoRa 32 para medir la temperatura, obtener la posición del GPS y transmitir datos a través de LoRa.',
        },
        technologies: ['C++', 'LoRa', 'GPS', 'IoT'],
        githubUrl: 'https://github.com/ValeriaZulu/IoT_EndDevices',
        featured: false,
    },
]