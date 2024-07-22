import {
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
    Vuejs
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
    React: {
        title: 'React',
        Icon: React,
        order: 3
    },
    Vuejs: {
        title: 'Vue.js',
        Icon: Vuejs,
        order: 4
    },
    Tailwindcss: {
        title: 'Tailwind CSS',
        Icon: Tailwindcss,
        order: 5
    },
    Nodejs: {
        title: 'Node.js',
        Icon: Nodejs,
        order: 6
    },
    Express: {
        title: 'Express.js',
        Icon: Expressjs,
        order: 7
    },
    Sequelize: {
        title: 'Sequelize',
        Icon: Sequelize,
        order: 8
    },
    MongoDB: {
        title: 'MongoDB',
        Icon: MongoDB,
        order: 9
    },
    Docker: {
        title: 'Docker',
        Icon: Docker,
        order: 10
    },
    Git: {
        title: 'Git',
        Icon: Git,
        order: 11
    },
    AntDesign: {
        title: 'Ant Design',
        Icon: AntDesign,
        order: 12
    },
    Astrojs: {
        title: 'Astro.js',
        Icon: Astrojs,
        order: 13
    },
    Sass: {
        title: 'Sass',
        Icon: Sass,
        order: 14
    },
    Postgres: {
        title: 'Postgres',
        Icon: Postgres,
        order: 14
    },
} as const satisfies Record<string, Technology>

