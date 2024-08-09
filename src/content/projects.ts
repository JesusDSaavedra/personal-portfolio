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
        "company-name": 'Ginko Financial Solutions',        
        logo: 'ginko.svg',
        "title-en": 'PSD Demo',
        "title-es": 'PSD Demo',
        "description-en": "Omnichannel platform for administration, management and integration of digital financial applications and services.",
        "description-es": "Plataforma omnicanal de administración, gestión e integración de aplicaciones y servicios digitales financieros.",
        image: "project-1.webp",
        "stack-tech": ['Vuejs', 'TypeScript','Sass','Docker','AntDesign','Git'],
        state: "private",
        images: ['project-1-1.webp', 'project-1-2.webp', 'project-1-3.webp'],
        "firstParagraph-en": 'As a frontend developer, I performed from scratch the complete development of a suite of three web applications (front office, back office and banking). Using Vue 3 and a modular architecture, I built highly responsive and easy to use user interfaces, aligned with the designs provided by the design team.',
        "firstParagraph-es": 'Como desarrollador frontend, realice desde cero el desarrollo completo de una suite de tres aplicaciones web (front office, back office y bancapersonas). Utilizando Vue 3 y una arquitectura modular, construí interfaces de usuario altamente responsivas y fáciles de usar, alineadas con los diseños proporcionados por el equipo de diseño. ',
        "secondParagraph-en": 'I implemented critical functionalities such as user authentication, real time data management, transfer, a CRUD for recipients, product visualization, information visualization through interactive graphs and integration with an API Gateway. To ensure code quality and application scalability, I used Pinia for global state management, Vitest for unit testing and a CI/CD pipeline based on GitLab.',
        "secondParagraph-es": 'Implementé funcionalidades críticas como autenticación de usuarios, gestión de datos en tiempo real, realizacion de transferencias, todo un CRUD para destinatarios, visualizacion de productos, visualización de informacion a través de gráficos interactivos y la integración con un API Gateway. Para garantizar la calidad del código y la escalabilidad de las aplicaciones, empleé Pinia para administrar el estado global, Vitest para realizar pruebas unitarias y una pipeline de CI/CD basada en GitLab.',
        "thirdParagraph-en": 'Despite the time and budget constraints since it was a demo, I managed to deliver a high quality product that met all the requirements of the project. During development, I faced challenges such as performance optimization for mobile devices and integration with legacy systems, which I solved by implementing caching techniques and using specialized libraries.',
        "thirdParagraph-es": 'A pesar de las limitaciones de tiempo y presupuesto ya que era una demo, logré entregar un producto de alta calidad que cumplió con todos los requisitos del proyecto. Durante el desarrollo, enfrenté desafíos como la optimización del rendimiento para dispositivos móviles y la integración con sistemas heredados, los cuales resolví mediante la implementación de técnicas de caching y la utilización de bibliotecas especializadas.',
        "fourthParagraph-en": 'Through this project, I consolidated my frontend skills, improved my ability to work autonomously and in a team, and gained a solid understanding of frontend development principles. In addition, I learned how to prioritize tasks, manage changing requirements, and deliver high quality products under pressure.',
        "fourthParagraph-es": 'A través de este proyecto, consolidé mis habilidades en el frontend, mejoré mi capacidad para trabajar de manera autónoma y en equipo, y adquirí una sólida comprensión de los principios de desarrollo frontend. Además, aprendí a priorizar las tareas, gestionar los cambios de requisitos y entregar productos de alta calidad bajo presión.',
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
        logo: 'TTVIP.svg',
        "company-name": 'Registraduría Ecuador',   
        "title-en": 'Your VIP procedures',
        "title-es": 'Tus tramites VIP',
        "description-en": "Digital platform that provides priority and personalized attention for all procedures.",
        "description-es": "Plataforma digital que brinda atención prioritaria y personalizada para todos los trámites.",
        image: "project-2.webp",
        "stack-tech": ['React','Sass','TypeScript','Git',],
        state: "private",
        images: ['project-2-1.webp','project-2-3.webp',],
        "firstParagraph-en": 'As a frontend developer, I developed and realized the responsive designs of the web application, ensuring an optimal user experience on any kind of device. In addition, I implemented a geolocation system based on Google Maps API to help users find the nearest notaries quickly and easily. To improve customer service, I developed an all the interface and iteractivity of a chatbot that was realized with Dialogflow, able to answer frequently asked questions and redirect to a human advisor when needed. During my time on the project, I fixed bugs and optimized the performance of the application by 10%.',
        "firstParagraph-es": 'Como desarrollador frontend, desarrolle y realize los diseños resposivos de la aplicacion web, asegurando una experiencia de usuario optima en cualquier tipo de dispositivo. Además, implementé un sistema de geolocalización basado en la API de Google Maps para ayudar a los usuarios a encontrar las notarias más cercanas de forma rápida y sencilla. Para mejorar la atención al cliente, desarrollé un toda la interfaz e iteractividad de un chatbot que fue realizado con Dialogflow, capaz de responder a las preguntas más frecuentes y redirigir a un asesor humano cuando sea necesario. Durante mi tiempo en el proyecto, solucioné bugs y optimicé el rendimiento de la aplicación en un 10%.',
        "secondParagraph-en": 'During the development of the application, I faced the challenge of optimizing the performance of the notary search page. Through the implementation of lazy loading techniques and file minification, I managed to significantly reduce the page load time, thus improving the user experience.',
        "secondParagraph-es": 'Durante el desarrollo de la aplicación, me enfrenté al desafío de optimizar el rendimiento de la página de búsqueda de notarias. A través de la implementación de técnicas de lazy loading y la minificación de archivos, logré reducir significativamente el tiempo de carga de la página, mejorando así la experiencia del usuario.',
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
        id: '3',
        'title-en': 'Backend - Online Store',
        'title-es': 'Backend - Tienda Online',
        "description-en": "Personal project: Complete backend development for an online store, including authentication, product management, shopping cart and favorites.",
        "description-es": "Proyecto personal: Desarrollo completo del backend para una tienda en línea, incluyendo autenticación, gestión de productos, carrito de compras y favoritos.",
        image: "project-3.webp",
        "stack-tech": ['Nodejs','Express','Postgres','Sequelize'],
        state: "public",
        images: ['project-3-1.webp'],
        "firstParagraph-en": 'I developed a complete backend using Node.js, Express.js and PostgreSQL for an online store. I implemented a strong authentication system with JWT to protect user data. In addition, I designed a RESTful API to manage the product catalog, allowing CRUD operations and advanced search. I used Sequelize as ORM to interact with the database and improve code efficiency.',
        "firstParagraph-es": 'Desarrollé un backend completo utilizando Node.js, Express.js y PostgreSQL para una tienda en línea. Implementé un sistema de autenticación robusto con JWT para proteger los datos de los usuarios. Además, diseñé una API RESTful para gestionar el catálogo de productos, permitiendo operaciones CRUD y búsqueda avanzada. Utilicé Sequelize como ORM para interactuar con la base de datos y mejorar la eficiencia del código.',
        "secondParagraph-en": 'I created a favorites section and a shopping cart, storing user data securely and allowing users to manage their favorite products and make purchases. To optimize application performance, I implemented caching using Redis and performed load testing to identify and fix bottlenecks.',
        "secondParagraph-es": 'Creé una sección de favoritos y un carrito de compras, almacenando los datos de los usuarios de forma segura y permitiendo a los usuarios gestionar sus productos favoritos y realizar compras. Para optimizar el rendimiento de la aplicación, implementé caché utilizando Redis y realicé pruebas de carga para identificar y solucionar cuellos de botella.',
        
    },
    {
        id: '4',
        'title-en': 'CryptoPlantsClub - NFTgames',
        'title-es': 'CryptoPlantsClub - NFTgames',
        "description-en": "Frontend development of a NFT game, including layout, functionality development and optimization for different devices.",
        "description-es": "Desarrollo frontend de un juego NFT, incluyendo maquetación, desarrollo de funcionalidades y optimización para diferentes dispositivos.",
        image: "project-4.webp",
        "stack-tech": ['JavaScript', 'CSS', 'HTML','Git'],
        state: "public",
        images: ['project-4-1.webp'],
        video: 'project-4-video.webm',
        "firstParagraph-en": 'As a freelance frontend developer, I worked on an NFT game project during the cryptocurrency boom. I was in charge of the complete layout of the interface, using HTML, CSS and JavaScript. In addition, I developed NFT purchase modules. I optimized the interface for different devices, ensuring a consistent user experience.',
        "firstParagraph-es": 'Como desarrollador frontend  freelance, trabajé en un proyecto de juego NFT durante el auge de las criptomonedas. Me encargué de la maquetación completa de la interfaz, utilizando HTML, CSS y JavaScript. Además, desarrollé módulos de compra de NFT. Optimicé la interfaz para diferentes dispositivos, garantizando una experiencia de usuario consistente.',
        "secondParagraph-en": 'I created interactive filters to help users find the NFTs they were most interested in, and designed custom animations to enhance the aesthetics of the game. I communicated with the game`s API to get real-time data about NFTs, such as sales statistics and rarities. I used Vanilla JS to build everything.',
        "secondParagraph-es": 'Creé filtros interactivos para ayudar a los usuarios a encontrar los NFTs que más les interesaban, y diseñé animaciones personalizadas para mejorar la estética del juego. Me comuniqué con la API del juego para obtener datos en tiempo real sobre los NFTs, como estadísticas de ventas y rarezas. Utilicé Vainilla JS para construir todo.',
        
    },
]
