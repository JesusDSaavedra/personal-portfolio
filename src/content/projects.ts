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
        "description-en": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. 1",
        "description-es": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        image: "project-1.jpeg",
        "stack-tech": ['Vuejs', 'TypeScript','Sass','Docker','AntDesign','Git'],
        state: "private",
        images: ['project-1.jpeg', 'project-2.webp'],
        "firstParagraph-en": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ea illo recusandae aliquid molestiae quod fugiat sit architecto possimus accusantium iusto officiis corrupti asperiores quibusdam magni velit odio, eius blanditiis?  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ea illo recusandae aliquid molestiae quod fugiat sit architecto possimus accusantium iusto officiis corrupti asperiores quibusdam magni velit odio, eius blanditiis?',
        "secondParagraph-en": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ea illo recusandae aliquid molestiae quod fugiat sit architecto possimus accusantium iusto officiis corrupti asperiores quibusdam magni velit odio, eius blanditiis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ea illo recusandae aliquid molestiae quod fugiat sit architecto possimus accusantium iusto officiis corrupti asperiores quibusdam magni velit odio, eius blanditiis?',
        "thirdParagraph-en": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ea illo recusandae aliquid molestiae quod fugiat sit architecto possimus accusantium iusto officiis corrupti asperiores quibusdam magni velit odio, eius blanditiis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ea illo recusandae aliquid molestiae quod fugiat sit architecto possimus accusantium iusto officiis corrupti asperiores quibusdam magni velit odio, eius blanditiis?',
        timeline: [
            {
                id: 1,
                date: '',
                title: 'Login realization',
                location: '',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
                type: 'work',
                image: 'project-3.webp',
            },
            {
                id: 2,
                date: '',
                title: 'Dashboard creation',
                location: '',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
                type: 'work',
                image: 'project-3.webp',
            },
            {
                id: 3,
                date: '',
                title: 'Transaction functionality ',
                location: '',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
                type: 'work',
                image: 'project-3.webp',
            },
            {
                id: 4,
                date: '',
                title: 'Enable - Disable users',
                location: '',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus ',
                type: 'work',
                image: 'project-3.webp',
            },
        ]
    },
    {
        id: '2',
        logo: 'ginko.svg',
        "company-name": 'Ecuatorian registry',   
        "title-en": 'Tus tramites VIP',
        "title-es": 'Registraduria de Ecuador',
        "description-en": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. 2",
        "description-es": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        image: "project-2.webp",
        "stack-tech": ['React','Sass','JavaScript','Git',],
        state: "private",
        images: ['project-1.jpeg',],
        "firstParagraph-en": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ea illo recusandae aliquid molestiae quod fugiat sit architecto possimus accusantium iusto officiis corrupti asperiores quibusdam magni velit odio, eius blanditiis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ea illo recusandae aliquid molestiae quod fugiat sit architecto possimus accusantium iusto officiis corrupti asperiores quibusdam magni velit odio, eius blanditiis?',
        "secondParagraph-en": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ea illo recusandae aliquid molestiae quod fugiat sit architecto possimus accusantium iusto officiis corrupti asperiores quibusdam magni velit odio, eius blanditiis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ea illo recusandae aliquid molestiae quod fugiat sit architecto possimus accusantium iusto officiis corrupti asperiores quibusdam magni velit odio, eius blanditiis?',
        timeline: [
            {
                id: 1,
                date: '',
                title: 'Adaptability to all types of devices',
                location: '',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
                type: 'work',
                image: 'project-3.webp',
            },
            {
                id: 2,
                date: '',
                title: 'Chatbot',
                location: '',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
                type: 'work',
                image: 'project-3.webp',
            },
            {
                id: 3,
                date: '',
                title: 'Map of notaries',
                location: '',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
                type: 'work',
                image: 'project-3.webp',
            },
        ]
    },
    {
        id: '3',
        'title-en': 'Backend Blog API',
        'title-es': 'API de blog backend',
        "description-en": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. 3",
        "description-es": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        image: "project-3.webp",
        "stack-tech": ['Nodejs','Express','Postgres','Sequelize'],
        state: "public",
        images: ['project-1.jpeg', 'project-2.webp'],
        "firstParagraph-en": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ea illo recusandae aliquid molestiae quod fugiat sit architecto possimus accusantium iusto officiis corrupti asperiores quibusdam magni velit odio, eius blanditiis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ea illo recusandae aliquid molestiae quod fugiat sit architecto possimus accusantium iusto officiis corrupti asperiores quibusdam magni velit odio, eius blanditiis?',
        "secondParagraph-en": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ea illo recusandae aliquid molestiae quod fugiat sit architecto possimus accusantium iusto officiis corrupti asperiores quibusdam magni velit odio, eius blanditiis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ea illo recusandae aliquid molestiae quod fugiat sit architecto possimus accusantium iusto officiis corrupti asperiores quibusdam magni velit odio, eius blanditiis?',
        
    }
]
