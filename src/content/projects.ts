import { technologies } from './technologies';
import type { Timeline } from './timeline';

export interface Project {
    id: string 
    'company-name'?: string
    'title-en': string
    'title-es': string
    'description-en': string
    'description-es': string
    logo?: string,
    image: string,
    'stack-tech': Array<keyof typeof technologies>
    state: 'public' | 'private'
    images: string[]
    video?: string
    year?: string
    'main-impact-en'?: string
    'main-impact-es'?: string
    'work-highlights-en'?: string[]
    'work-highlights-es'?: string[]
    'firstParagraph-en'?: string
    'firstParagraph-es'?: string
    'secondParagraph-en'?: string
    'secondParagraph-es'?: string
    'thirdParagraph-en'?: string
    'thirdParagraph-es'?: string
    'fourthParagraph-en'?: string
    'fourthParagraph-es'?: string
    link?: string
    timeline?: Timeline[]
}



export const projects: Project[] = [
    {
        id: '1',
        "company-name": 'Global66',        
        logo: 'global66.svg',
        "title-en": 'Mobile App & B2B Web',
        "title-es": 'App Móvil y Web B2B',
        "description-en": "Chilean fintech specialized in international transfers and digital financial solutions for individuals and businesses across Latin America.",
        "description-es": "Fintech chilena especializada en transferencias internacionales y soluciones financieras digitales para personas y empresas en Latinoamérica.",
        "stack-tech": ['Nativescript','Vuejs','TypeScript','Sass','Storybook','Git'],
        image: "project-5.webp",
        state: "private",
        images: ['project-5.webp', 'project-5-1.webp', 'project-5-2.webp', 'project-5-3.webp'],
        "main-impact-en": "Leading developer in SmartCard Limits and optimization of financial application performance.",
        "main-impact-es": "Desarrollador líder en SmartCard Limits y optimización del rendimiento de aplicaciones financieras.",
        "work-highlights-en": [
            "I led the \"SmartCard Limits\" project, developing a comprehensive system for controlling daily and monthly limits for ATMs, physical stores, and online purchases using virtual and physical cards, which gave users complete control and enhanced the product experience.",
            "I modernized the architecture by migrating more than 10 critical components and refactoring legacy code, achieving an 8% increase in application performance and a reduction in the time-to-market for new features.",
            "I managed and resolved incidents of medium, high, and urgent severity, ensuring the operational continuity of the system and customer confidence in critical environments.",
            "I introduced AI agents contextualized with the architecture and technical documentation, optimizing development and integration processes and significantly reducing delivery times for new features."
        ],
        "work-highlights-es": [
            "Lideré el proyecto \"SmartCard Limits\", desarrollando un sistema integral de control de límites diarios y mensuales para ATM, comercios físicos y compras online en tarjetas virtuales y físicas, lo que otorgó control total al usuario y elevó la experiencia del producto.",
            "Modernicé la arquitectura al migrar más de 10 componentes críticos y refactorizar código legacy, logrando un aumento del 8% en el rendimiento de la aplicación y una reducción en el time-to-market de nuevas funcionalidades.",
            "Gestioné y resolví incidentes de severidad media, alta y urgente, asegurando la continuidad operativa del sistema y la confianza de los clientes en entornos críticos.",
            "Introduje agentes de IA contextualizados con la arquitectura y documentación técnica, optimizando los procesos de desarrollo e integración y reduciendo significativamente los tiempos de entrega de nuevas funcionalidades."
        ]
    //     timeline: [
    //         {
    //             id: 1,
    //             date: '',
    //             title: 'Login realization',
    //             location: '',
    //             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
    //             type: 'work',
    //             image: 'project-3.webp',
    //         },
    //         {
    //             id: 2,
    //             date: '',
    //             title: 'Dashboard creation',
    //             location: '',
    //             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
    //             type: 'work',
    //             image: 'project-3.webp',
    //         },
    //         {
    //             id: 3,
    //             date: '',
    //             title: 'Transaction functionality ',
    //             location: '',
    //             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
    //             type: 'work',
    //             image: 'project-3.webp',
    //         },
    //         {
    //             id: 4,
    //             date: '',
    //             title: 'Enable - Disable users',
    //             location: '',
    //             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus ',
    //             type: 'work',
    //             image: 'project-3.webp',
    //         },
    //     ]
    },
    {
        id: '2',
        "company-name": 'Ginko Financial Solutions',        
        logo: 'ginko.svg',
        "title-en": 'PSD Demo',
        "title-es": 'PSD Demo',
        "description-en": "Omnichannel platform for administration, management and integration of digital financial applications and services.",
        "description-es": "Plataforma omnicanal de administración, gestión e integración de aplicaciones y servicios digitales financieros.",
        "stack-tech": ['Vuejs', 'TypeScript','Sass','Docker','AntDesign','Storybook','Git'],
        image: "project-1.webp",
        state: "private",
        images: ['project-1.webp','project-1-1.webp', 'project-1-2.webp', 'project-1-3.webp'],
        "main-impact-en": "Technical leader in building a scalable digital banking suite.",
        "main-impact-es": "Líder técnico en construcción de una suite bancaria digital escalable.",
        "work-highlights-en": [
            "I led the PSD project, developing from scratch a suite of three web applications (front office, back office, and personal banking) that laid the foundations for a scalable digital ecosystem for the organization.",
            "I designed a modular architecture based on Clean Architecture principles, enabling rapid expansion and more agile long-term maintenance.",
            "I drove the creation of a scalable and reusable user interface, improving visual consistency and accelerating the delivery of new features.",
            "I developed critical features such as authentication, real-time transfers, and interactive visualizations, ensuring reliability and a better user experience."
        ],
            "work-highlights-es": [
            "Lideré el proyecto PSD, desarrollando desde cero una suite de tres aplicaciones web (front office, back office y banca personas) que sentó las bases de un ecosistema digital escalable para la organización.",
            "Diseñé una arquitectura modular bajo principios de Clean Architecture, permitiendo expansiones rápidas y un mantenimiento más ágil a largo plazo.",
            "Impulsé la creación de una interfaz de usuario escalable y reutilizable, mejorando la consistencia visual y acelerando la entrega de nuevas funcionalidades.",
            "Desarrollé funcionalidades críticas como autenticación, transferencias en tiempo real y visualizaciones interactivas, garantizando confiabilidad y una mejor experiencia de usuario."
        ]
    //     timeline: [
    //         {
    //             id: 1,
    //             date: '',
    //             title: 'Login realization',
    //             location: '',
    //             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
    //             type: 'work',
    //             image: 'project-3.webp',
    //         },
    //         {
    //             id: 2,
    //             date: '',
    //             title: 'Dashboard creation',
    //             location: '',
    //             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
    //             type: 'work',
    //             image: 'project-3.webp',
    //         },
    //         {
    //             id: 3,
    //             date: '',
    //             title: 'Transaction functionality ',
    //             location: '',
    //             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
    //             type: 'work',
    //             image: 'project-3.webp',
    //         },
    //         {
    //             id: 4,
    //             date: '',
    //             title: 'Enable - Disable users',
    //             location: '',
    //             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus ',
    //             type: 'work',
    //             image: 'project-3.webp',
    //         },
    //     ]
    },
    {
        id: '3',
        logo: 'TTVIP.svg',
        "company-name": 'Registraduría Ecuador',   
        "title-en": 'Your VIP procedures',
        "title-es": 'Tus tramites VIP',
        "description-en": "Digital platform that provides priority and personalized attention for all procedures.",
        "description-es": "Plataforma digital que brinda atención prioritaria y personalizada para todos los trámites.",
        image: "project-2.webp",
        "stack-tech": ['React','Angular','Sass','TypeScript','Git',],
        state: "private",
        images: ['project-2.webp','project-2-1.webp','project-2-2.webp','project-2-3.webp',],
        "main-impact-en": "GovTech technical leader in digitization and automation of procedures.",
        "main-impact-es": "Líder técnico GovTech en digitalización y automatización de trámites.",
        "work-highlights-en": [
            "I developed a document management system that optimized the user experience, from entering personal information to managing payments and selecting a notary, streamlining the document process.",
            "I implemented a comprehensive administrative panel that allowed for the control and supervision of all procedures and users registered on the platform, facilitating the creation, modification, and tracking of procedures.",
            "I ensured the quality of the code and the stability of the project through unit and integration testing, guaranteeing that all elements of the system functioned efficiently and without errors."
        ],
        "work-highlights-es": [
            "Desarrollé un sistema de gestión de trámites que optimizó la experiencia del usuario, desde el ingreso de información personal hasta la gestión de pagos y selección de notario, agilizando el proceso de trámites.",
            "Implementé un panel administrativo completo, que permitió el control y supervisión de todos los trámites y usuarios registrados en la plataforma, facilitando la creación, modificación y seguimiento de trámites.",
            "Aseguré la calidad del código y la estabilidad del proyecto mediante pruebas unitarias y de integración, garantizando que todos los elementos del sistema funcionaran de manera eficiente y sin errores."
        ]
        // timeline: [
        //     {
        //         id: 1,
        //         date: '',
        //         title: 'Adaptability to all types of devices',
        //         location: '',
        //         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
        //         type: 'work',
        //         image: 'project-3.webp',
        //     },
        //     {
        //         id: 2,
        //         date: '',
        //         title: 'Chatbot',
        //         location: '',
        //         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
        //         type: 'work',
        //         image: 'project-3.webp',
        //     },
        //     {
        //         id: 3,
        //         date: '',
        //         title: 'Map of notaries',
        //         location: '',
        //         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
        //         type: 'work',
        //         image: 'project-3.webp',
        //     },
        // ]
    },
    {
        id: '4',
        'title-en': 'Backend - Online Store',
        'title-es': 'Backend - Tienda Online',
        "description-en": "Personal project: Complete backend development for an online store, including authentication, product management, shopping cart and favorites.",
        "description-es": "Proyecto personal: Desarrollo completo del backend para una tienda en línea, incluyendo autenticación, gestión de productos, carrito de compras y favoritos.",
        image: "project-3.webp",
        "stack-tech": ['Nodejs','Express','Postgres','Sequelize'],
        state: "public",
        images: ['project-3-1.webp', 'project-3.webp'],
        "main-impact-en": "Architected and developed a complete e-commerce backend solution with secure authentication, advanced product management, and performance optimization, creating a scalable foundation for online retail operations.",
        "main-impact-es": "Arquitecturé y desarrollé una solución backend completa de e-commerce con autenticación segura, gestión avanzada de productos y optimización de rendimiento, creando una base escalable para operaciones de venta en línea.",
        "work-highlights-en": [
            "Developed a complete backend infrastructure using Node.js, Express.js, and PostgreSQL for an online store, establishing a robust and scalable foundation for e-commerce operations with modern web technologies.",
            "Implemented comprehensive authentication system with JWT tokens to protect user data and secure all application endpoints, ensuring data privacy and compliance with security best practices.",
            "Designed and built RESTful API architecture for product catalog management, enabling full CRUD operations and advanced search functionality, streamlining inventory management and product discovery.",
            "Integrated Sequelize ORM for efficient database interactions, improving code maintainability and development efficiency through object-relational mapping and query optimization.",
            "Created user-centric features including favorites section and shopping cart functionality, securely storing user data and enabling seamless product management and purchase workflows.",
            "Optimized application performance through Redis caching implementation and conducted comprehensive load testing to identify and resolve bottlenecks, ensuring optimal system responsiveness under high traffic conditions."
        ],
        "work-highlights-es": [
            "Desarrollé una infraestructura backend completa utilizando Node.js, Express.js y PostgreSQL para una tienda en línea, estableciendo una base robusta y escalable para operaciones de e-commerce con tecnologías web modernas.",
            "Implementé sistema de autenticación integral con tokens JWT para proteger datos de usuarios y asegurar todos los endpoints de la aplicación, garantizando privacidad de datos y cumplimiento de mejores prácticas de seguridad.",
            "Diseñé y construí arquitectura API RESTful para gestión de catálogo de productos, habilitando operaciones CRUD completas y funcionalidad de búsqueda avanzada, optimizando la gestión de inventario y descubrimiento de productos.",
            "Integré Sequelize ORM para interacciones eficientes con la base de datos, mejorando la mantenibilidad del código y eficiencia de desarrollo mediante mapeo objeto-relacional y optimización de consultas.",
            "Creé funcionalidades centradas en el usuario incluyendo sección de favoritos y funcionalidad de carrito de compras, almacenando datos de usuarios de forma segura y habilitando flujos fluidos de gestión de productos y compras.",
            "Optimicé el rendimiento de la aplicación mediante implementación de caché con Redis y realicé pruebas de carga integrales para identificar y resolver cuellos de botella, asegurando respuesta óptima del sistema bajo condiciones de alto tráfico."
        ]
    },
    {
        id: '5',
        'title-en': 'CryptoPlantsClub - NFTgames',
        'title-es': 'CryptoPlantsClub - NFTgames',
        "description-en": "Frontend development of a NFT game, including layout, functionality development and optimization for different devices.",
        "description-es": "Desarrollo frontend de un juego NFT, incluyendo maquetación, desarrollo de funcionalidades y optimización para diferentes dispositivos.",
        image: "project-4.webp",
        "stack-tech": ['Angular','JavaScript', 'CSS', 'HTML','Git'],
        state: "public",
        images: ['project-4.webp','project-4-1.webp', 'project-4-video.webm', ],
        video: 'project-4-video.webm',
        "main-impact-en": "Developer specializing in Web3 gaming and smart contracts.",
        "main-impact-es": "Desarrollador especializado en gaming Web3 y contratos inteligentes.",
        "work-highlights-en": [
            "I developed and managed several key modules of the NFT game operated on the Binance network.",
            "I optimized the user experience, improving both game performance and accessibility.",
            "I implemented innovative solutions to ensure that the game met design and functionality requirements."
        ],
        "work-highlights-es": [
            "Desarrollé y gestioné varios módulos clave del juego NFT operado en la red Binance.",
            "Optimicé la experiencia del usuario, mejorando tanto el rendimiento del juego como la accesibilidad.",
            "Implementé soluciones innovadoras para asegurar que el juego cumpliera con los requisitos de diseño y funcionalidad."
        ]
    },
]
