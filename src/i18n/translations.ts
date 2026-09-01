export const translations = {
    en: {
        nav: {
            about: 'About',
            projects: 'Projects',
            education: 'Education',
            contact: 'Contact',
        },

        hero: {
            role: 'Systems Engineering Student',
            greeting: "Hi, I'm",
            description:
                'I enjoy building software, exploring new technologies, and turning what I learn into practical projects.',
            projectsButton: 'Explore my projects',
        },

        about: {
            label: 'About me',
            title: 'A little bit about me',

            paragraphs: [
                "I'm currently studying Systems Engineering at Universidad Pontificia Bolivariana, where I've had the opportunity to explore different areas of software and technology.",
                "Throughout my degree, I've worked on projects involving web and mobile development, databases, data analysis, and software architecture.",
                'I enjoy learning by building, experimenting with new technologies, and turning what I learn into practical projects.',
            ],

            areas: {
                software: {
                    title: 'Software Development',
                    description:
                        'Building applications and learning through hands-on projects.',
                },
                mobile: {
                    title: 'Mobile Development',
                    description:
                        'Exploring mobile applications through React Native and Kotlin.',
                },
                data: {
                    title: 'Data & Analytics',
                    description:
                        'Working with data, databases, and introductory machine learning.',
                },
                architecture: {
                    title: 'Software Architecture',
                    description:
                        'Exploring architectural patterns and Domain-Driven Design.',
                },
            },
        },

        projects: {
            label: 'Selected work',
            title: "Projects I've built",
            viewAll: 'View all projects ↗',

            pageLabel: 'Projects',
            pageTitle: "Things I've built",
            pageDescription:
                "A selection of projects I've worked on throughout my studies, exploring software development, data, databases, mobile applications, and software architecture.",

            featured: 'Featured projects',
            other: 'Other projects',

            github: 'GitHub ↗',
            liveDemo: 'Live Demo ↗',
            privateRepository: 'Private repository',
        },

        education: {
            label: 'Education',
            title: 'My academic journey',
            degree: 'Systems Engineering',
            location: 'Medellín, Colombia',
            level: 'Undergraduate',
            description:
                'Currently pursuing a degree in Systems Engineering, with academic experience across software development, databases, data analysis, mobile applications, and software architecture.',
            focus: 'Academic focus',

            areas: [
                'Software Development',
                'Databases',
                'Data Analysis',
                'Mobile Development',
                'Software Architecture',
            ],
        },

        contact: {
            label: 'Contact',
            title: "Let's connect",
            description:
                "I'm always open to learning, collaborating, and new opportunities to grow as a software developer.",
            linkedin: 'LinkedIn ↗',
            cv: 'CV ↗',
        },

        footer: {
            builtWith: 'Built with React, TypeScript & Vite',
        },
    },

    es: {
        nav: {
            about: 'Sobre mí',
            projects: 'Proyectos',
            education: 'Educación',
            contact: 'Contacto',
        },

        hero: {
            role: 'Estudiante de Ingeniería de Sistemas',
            greeting: 'Hola, soy',
            description:
                'Me gusta desarrollar software, explorar nuevas tecnologías y convertir lo que aprendo en proyectos prácticos.',
            projectsButton: 'Explorar mis proyectos',
        },

        about: {
            label: 'Sobre mí',
            title: 'Un poco sobre mí',

            paragraphs: [
                'Actualmente estudio Ingeniería de Sistemas en la Universidad Pontificia Bolivariana, donde he tenido la oportunidad de explorar diferentes áreas del software y la tecnología.',
                'A lo largo de mi carrera, he trabajado en proyectos relacionados con desarrollo web y móvil, bases de datos, análisis de datos y arquitectura de software.',
                'Disfruto aprender construyendo, experimentar con nuevas tecnologías y convertir lo que aprendo en proyectos prácticos.',
            ],

            areas: {
                software: {
                    title: 'Desarrollo de Software',
                    description:
                        'Construcción de aplicaciones y aprendizaje a través de proyectos prácticos.',
                },
                mobile: {
                    title: 'Desarrollo Móvil',
                    description:
                        'Exploración del desarrollo de aplicaciones móviles con React Native y Kotlin.',
                },
                data: {
                    title: 'Datos y Analítica',
                    description:
                        'Trabajo con datos, bases de datos y conceptos introductorios de aprendizaje automático.',
                },
                architecture: {
                    title: 'Arquitectura de Software',
                    description:
                        'Exploración de patrones arquitectónicos y Domain-Driven Design.',
                },
            },
        },

        projects: {
            label: 'Proyectos destacados',
            title: 'Proyectos que he desarrollado',
            viewAll: 'Ver todos los proyectos ↗',

            pageLabel: 'Proyectos',
            pageTitle: 'Lo que he construido',
            pageDescription:
                'Una selección de proyectos en los que he trabajado durante mi carrera, explorando desarrollo de software, datos, bases de datos, aplicaciones móviles y arquitectura de software.',

            featured: 'Proyectos destacados',
            other: 'Otros proyectos',

            github: 'GitHub ↗',
            liveDemo: 'Demo ↗',
            privateRepository: 'Repositorio privado',
        },

        education: {
            label: 'Educación',
            title: 'Mi trayectoria académica',
            degree: 'Ingeniería de Sistemas',
            location: 'Medellín, Colombia',
            level: 'Pregrado',
            description:
                'Actualmente curso Ingeniería de Sistemas, con experiencia académica en desarrollo de software, bases de datos, análisis de datos, aplicaciones móviles y arquitectura de software.',
            focus: 'Enfoque académico',

            areas: [
                'Desarrollo de Software',
                'Bases de Datos',
                'Análisis de Datos',
                'Desarrollo Móvil',
                'Arquitectura de Software',
            ],
        },

        contact: {
            label: 'Contacto',
            title: 'Conectemos',
            description:
                'Siempre estoy abierta a aprender, colaborar y encontrar nuevas oportunidades para crecer como desarrolladora de software.',
            linkedin: 'LinkedIn ↗',
            cv: 'CV ↗',
        },

        footer: {
            builtWith: 'Hecho con React, TypeScript y Vite',
        },
    },
}

export type Language = 'en' | 'es'