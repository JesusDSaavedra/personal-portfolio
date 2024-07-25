
export interface Timeline {
    id: string | number
    title: string
    location: string
    date: string
    description: string
    image?: string
    type: 'work' | 'education'
    'id-work'?: string
}



export const timelines: Timeline[] = [
    {
        id: 0,
        title: 'Start in programming',
        location: 'Colombia',
        date: 'Jun 2022',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
        image: 'project-3.webp',
        type: "education"
    },
    {
        id: 1,
        title: 'Javascript Basic',
        location: 'Colombia',
        date: 'Jun 2022',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
        image: 'project-3.webp',
        type: "education"
    },
    {
        id: 2,
        title: 'EcmaScript 6',
        location: 'Colombia',
        date: 'Jun 2022',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
        image: 'project-3.webp',
        type: "education"
    },
    {
        id: 3,
        title: 'First job as a freelancer',
        location: 'Colombia - remote',
        date: 'Jun 2022',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
        image: 'project-3.webp',
        type: "work"
    },
    {
        id: 4,
        title: 'React',
        location: 'Colombia',
        date: 'Jun 2022',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
        image: 'project-3.webp',
        type: "education"
    },
    {
        id: 4,
        title: 'First Job',
        location: 'Colombia',
        date: 'Jun 2022',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero iusto itaque molestiae nemo magni quis enim maxime repellendus',
        image: 'project-1.jpeg',
        type: "work",
        'id-work': '1'
    },
]