import { technologies } from './technologies';

export interface Project {
    id: string
    'title-en': string
    'title-es': string
    'description-en': string
    'description-es': string
    image: string
    'stack-tech': Array<keyof typeof technologies>
    state: 'public' | 'private'
    images: string[]
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
}



export const projects: Project[] = [
    {
        id: '1',
        "title-en": 'PSD Demo',
        "title-es": 'PSD Demo',
        "description-en": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "description-es": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        image: "/project-1.jpeg",
        "stack-tech": ['Vuejs', 'TypeScript','Sass','Docker','AntDesign','Git'],
        state: "private",
        images: []
    },
    {
        id: '2',
        "title-en": 'Ecuatorian registry',
        "title-es": 'Registraduria de Ecuador',
        "description-en": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "description-es": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        image: "/project-2.webp",
        "stack-tech": ['React','Sass','JavaScript','Git',],
        state: "private",
        images: []
    },
    {
        id: '3',
        'title-en': 'Backend Blog API',
        'title-es': 'API de blog backend',
        "description-en": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "description-es": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        image: "/project-3.webp",
        "stack-tech": ['Nodejs','Express','Postgres','Sequelize'],
        state: "public",
        images: []
    },
]
