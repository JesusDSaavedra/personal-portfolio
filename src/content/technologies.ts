import {
    Flutter,
    Storybook,
    Nativescript,
    Astrojs,
    Docker,
    Git,
    Javascript,
    MongoDB,
    Nodejs,
    React,
    Sass,
    Tailwindcss,
    Typescript,
    Expressjs,
    AntDesign, 
    Postgres, 
    Sequelize,
    Vuejs,
    CSS,
    HTML,
    Angular
} from '../icons/icons-programming'


type Technology = {
    title: string
    Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
    order: number
}

export const technologies = {
    TypeScript: {
        title: 'TypeScript',
        Icon: Typescript,
        order: 1
    },
    JavaScript: {
        title: 'JavaScript',
        Icon: Javascript,
        order: 2
    },
    Nativescript: {
        title: 'Nativescript',
        Icon: Nativescript,
        order: 10,
    },
    Flutter: {
        title: 'Flutter',
        Icon: Flutter,
        order: 3
    },
    React: {
        title: 'React',
        Icon: React,
        order: 4
    },
    Vuejs: {
        title: 'Vue.js',
        Icon: Vuejs,
        order: 5
    },
    Angular: {
        title: 'Angular',
        Icon: Angular,
        order: 20
    },
    Storybook: {
        title: 'Storybook',
        Icon: Storybook,
        order: 19
    },
    Tailwindcss: {
        title: 'Tailwind CSS',
        Icon: Tailwindcss,
        order: 6
    },
    Nodejs: {
        title: 'Node.js',
        Icon: Nodejs,
        order: 7
    },
    Express: {
        title: 'Express.js',
        Icon: Expressjs,
        order: 8
    },
    Sequelize: {
        title: 'Sequelize',
        Icon: Sequelize,
        order: 9
    },
    MongoDB: {
        title: 'MongoDB',
        Icon: MongoDB,
        order: 10
    },
    Docker: {
        title: 'Docker',
        Icon: Docker,
        order: 11
    },
    Git: {
        title: 'Git',
        Icon: Git,
        order: 12
    },
    AntDesign: {
        title: 'Ant Design',
        Icon: AntDesign,
        order: 13
    },
    Astrojs: {
        title: 'Astro.js',
        Icon: Astrojs,
        order: 14
    },
    Sass: {
        title: 'Sass',
        Icon: Sass,
        order: 15
    },
    Postgres: {
        title: 'Postgres',
        Icon: Postgres,
        order: 16
    },
    CSS: {
        title: 'CSS',
        Icon: CSS,
        order: 17
    },
    HTML: {
        title: 'HTML',
        Icon: HTML,
        order: 18
    },
} as const satisfies Record<string, Technology>

