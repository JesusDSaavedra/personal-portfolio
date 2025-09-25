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
        "main-impact-en": "Modernized B2B/B2C applications through strategic component migration and financial platform development, achieving 8% performance improvement while implementing comprehensive virtual and physical card management systems.",
        "main-impact-es": "Modernizé aplicaciones B2B/B2C mediante migración estratégica de componentes y desarrollo de plataforma financiera, logrando una mejora del 8% en rendimiento mientras implementaba sistemas completos de gestión de tarjetas virtuales y físicas.",
        "work-highlights-en": [
            "Developed and maintained B2B and B2C web and mobile applications using Vue3 and Vue2 (NativeScript) with Clean Architecture, ensuring scalable and maintainable code structure across multiple platforms.",
            "Successfully migrated 8 key components and refactored legacy code, improving application performance by 8% and accelerating new feature delivery through enhanced code efficiency and modernization.",
            "Implemented comprehensive virtual and physical card functionalities from scratch, including purchase limit configuration and transaction management systems, enabling complete financial card lifecycle management.",
            "Resolved medium, high, and urgent severity incidents with precision, maintaining system stability and ensuring continuous service availability for critical business operations.",
            "Optimized development processes by implementing contextualized AI agents with architecture and technical documentation, significantly reducing integration times and improving development workflow efficiency."
        ],
        "work-highlights-es": [
            "Desarrollé y mantuve aplicaciones web y móviles B2B y B2C utilizando Vue3 y Vue2 (NativeScript) con Arquitectura Limpia, asegurando una estructura de código escalable y mantenible en múltiples plataformas.",
            "Migré exitosamente 8 componentes clave y refactoricé código legacy, mejorando el rendimiento de la aplicación en un 8% y acelerando la entrega de nuevas funcionalidades mediante mayor eficiencia y modernización del código.",
            "Implementé funcionalidades completas para tarjetas virtuales y físicas desde cero, incluyendo configuración de límites de compra y sistemas de gestión de transacciones, habilitando la gestión integral del ciclo de vida de tarjetas financieras.",
            "Resolví incidentes de gravedad media, alta y urgente con precisión, manteniendo la estabilidad del sistema y asegurando la disponibilidad continua del servicio para operaciones críticas del negocio.",
            "Optimicé procesos de desarrollo implementando agentes de IA contextualizados con arquitectura y documentación técnica, reduciendo significativamente los tiempos de integración y mejorando la eficiencia del flujo de trabajo de desarrollo."
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
        "main-impact-en": "Led the complete development of PSD project suite comprising three interconnected web applications with modular architecture, implementing critical financial functionalities and establishing robust CI/CD infrastructure for long-term scalability.",
        "main-impact-es": "Lideré el desarrollo completo de la suite del proyecto PSD compuesta por tres aplicaciones web interconectadas con arquitectura modular, implementando funcionalidades financieras críticas y estableciendo infraestructura CI/CD robusta para escalabilidad a largo plazo.",
        "work-highlights-en": [
            "Led the PSD project from conception to deployment, developing a complete suite of three web applications (front office, back office, and personal banking) with modular and scalable architecture, establishing the foundation for comprehensive financial service management.",
            "Implemented Clean Architecture by dividing the system into independent layers, facilitating future expansions and ensuring long-term project maintainability through separation of concerns and modular design principles.",
            "Developed critical financial functionalities including secure user authentication, real-time data management, comprehensive transfer system, and complete CRUD operations for recipient management, enabling full banking operation capabilities.",
            "Created dynamic data visualizations with interactive charts and established robust API Gateway integration, providing users with intuitive financial insights and ensuring seamless communication between system components.",
            "Implemented comprehensive development infrastructure using Pinia for global state management, Vitest for unit testing, and GitLab CI/CD pipeline, guaranteeing code quality, system stability, and automated deployment processes."
        ],
        "work-highlights-es": [
            "Lideré el proyecto PSD desde la concepción hasta el despliegue, desarrollando una suite completa de tres aplicaciones web (front office, back office y banca personas) con arquitectura modular y escalable, estableciendo la base para la gestión integral de servicios financieros.",
            "Implementé Clean Architecture dividiendo el sistema en capas independientes, facilitando expansiones futuras y asegurando el mantenimiento a largo plazo del proyecto mediante separación de responsabilidades y principios de diseño modular.",
            "Desarrollé funcionalidades financieras críticas incluyendo autenticación segura de usuarios, gestión de datos en tiempo real, sistema integral de transferencias y operaciones CRUD completas para gestión de destinatarios, habilitando capacidades completas de operación bancaria.",
            "Creé visualizaciones dinámicas de datos con gráficos interactivos y establecí integración robusta con API Gateway, proporcionando a los usuarios insights financieros intuitivos y asegurando comunicación fluida entre componentes del sistema.",
            "Implementé infraestructura de desarrollo integral utilizando Pinia para gestión de estado global, Vitest para pruebas unitarias y pipeline CI/CD con GitLab, garantizando calidad del código, estabilidad del sistema y procesos de despliegue automatizados."
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
        "stack-tech": ['React','Sass','TypeScript','Git',],
        state: "private",
        images: ['project-2.webp','project-2-1.webp','project-2-2.webp','project-2-3.webp',],
        "main-impact-en": "Enhanced government web application accessibility and user experience through responsive interface development, intelligent geolocation services, and automated customer service integration, modernizing citizen digital interaction with government services.",
        "main-impact-es": "Mejoré la accesibilidad y experiencia de usuario de aplicación web gubernamental mediante desarrollo de interfaces responsive, servicios inteligentes de geolocalización e integración de atención al cliente automatizada, modernizando la interacción digital ciudadana con servicios gubernamentales.",
        "work-highlights-en": [
            "Developed comprehensive responsive interfaces for government web application, ensuring optimal user experience across all devices and screen sizes, improving accessibility and citizen engagement with government digital services.",
            "Implemented advanced geolocation system using Google Maps API to enable efficient location of nearby notaries, streamlining citizen access to essential legal services through intelligent geographic search capabilities.",
            "Developed complete chatbot interface integrated with Dialogflow, optimizing automated customer service and providing 24/7 citizen support, reducing response times and improving overall service quality for government inquiries."
        ],
        "work-highlights-es": [
            "Desarrollé interfaces responsive integrales para aplicación web gubernamental, asegurando experiencia de usuario óptima en todos los dispositivos y tamaños de pantalla, mejorando la accesibilidad y participación ciudadana con servicios digitales gubernamentales.",
            "Implementé sistema de geolocalización avanzado utilizando Google Maps API para permitir localización eficiente de notarías cercanas, agilizando el acceso ciudadano a servicios legales esenciales mediante capacidades inteligentes de búsqueda geográfica.",
            "Desarrollé interfaz completa de chatbot integrada con Dialogflow, optimizando la atención al cliente automatizada y proporcionando soporte ciudadano 24/7, reduciendo tiempos de respuesta y mejorando la calidad general del servicio para consultas gubernamentales."
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
        "stack-tech": ['JavaScript', 'CSS', 'HTML','Git'],
        state: "public",
        images: ['project-4.webp','project-4-1.webp', 'project-4-video.webm', ],
        video: 'project-4-video.webm',
        "main-impact-en": "Developed and optimized core modules for Web3 NFT gaming platform on Binance Smart Chain, enhancing game performance, user accessibility, and implementing blockchain-based gaming solutions that met complex design and functionality requirements.",
        "main-impact-es": "Desarrollé y optimicé módulos centrales para plataforma de gaming NFT Web3 en Binance Smart Chain, mejorando el rendimiento del juego, accesibilidad del usuario e implementando soluciones de gaming basadas en blockchain que cumplieron con complejos requisitos de diseño y funcionalidad.",
        "work-highlights-en": [
            "Developed and managed several key modules of NFT game infrastructure operating on Binance Smart Chain, creating robust blockchain gaming architecture and ensuring seamless integration with Web3 protocols and smart contract functionality.",
            "Optimized comprehensive user experience by improving game performance metrics and enhancing accessibility features, resulting in smoother gameplay mechanics and broader user adoption across diverse gaming demographics.",
            "Implemented innovative blockchain-based solutions and smart contract integrations to ensure the game met complex design specifications and functionality requirements, delivering cutting-edge Web3 gaming experiences that aligned with project vision and technical standards."
        ],
        "work-highlights-es": [
            "Desarrollé y gestioné varios módulos clave de la infraestructura del juego NFT operando en Binance Smart Chain, creando arquitectura robusta de gaming blockchain y asegurando integración fluida con protocolos Web3 y funcionalidad de contratos inteligentes.",
            "Optimicé la experiencia integral del usuario mejorando métricas de rendimiento del juego y potenciando características de accesibilidad, resultando en mecánicas de juego más fluidas y mayor adopción de usuarios en diversas demografías gaming.",
            "Implementé soluciones innovadoras basadas en blockchain e integraciones de contratos inteligentes para asegurar que el juego cumpliera con especificaciones de diseño complejas y requisitos de funcionalidad, entregando experiencias de gaming Web3 de vanguardia alineadas con la visión del proyecto y estándares técnicos."
        ]
    },
]
