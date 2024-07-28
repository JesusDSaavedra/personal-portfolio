export interface TechnologyAndFramework {
  name: string
  logo: string
  'description-en': string
  'description-es': string
  url?: string
}

export const currentlyLearning: TechnologyAndFramework[] = [
  {
    name: 'GraphQL',
    logo: '/graphql.webp',
    url: 'https://graphql.org/',
    'description-en': 'A query language for your API',
    'description-es':
      'Es un lenguaje de consulta para APIs que permite a los clientes solicitar datos específicos de manera eficiente.'
  },
]

export const technologiesAndFrameworks: TechnologyAndFramework[] = [
  {
    name: 'TypeScript',
    logo: '/typescript.webp',
    url: 'https://www.typescriptlang.org/',
    'description-en': 'It is a superset of JavaScript, which essentially adds static types and class-based objects.',
    'description-es':
      'Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases. '
  },
  {
    name: 'React',
    logo: '/react.webp',
    url: 'https://reactjs.org/',
    'description-en': 'It is a JavaScript library for creating interactive and efficient user interfaces with reusable and declarative components.',
    'description-es':
    'Es una biblioteca JavaScript para crear interfaces de usuario interactivas y eficientes con componentes reutilizables y declarativos.'
  },
  {
    name: 'Vue.js',
    logo: '/vue.webp',
    url: 'https://vuejs.org/',
    'description-en': 'It is a Javascript framework that uses "high decoupling", which allows to progressively create user interfaces.',
    'description-es':
    'Es un framework de Javascript que utiliza "alto desacoplamiento", lo que permite crear progresivamente interfaces de usuario.'
  },
  {
    name: 'JavaScript',
    logo: '/javascript.webp',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    'description-en': 'It is a programming language used mainly in web browsers to create interactivity and dynamism in pages.',
    'description-es':
      'Es un lenguaje de programación utilizado principalmente en navegadores web para crear interactividad y dinamismo en las páginas.'
  },
  {
    name: 'Tailwind CSS',
    logo: '/tailwind.webp',
    url: 'https://tailwindcss.com/',
    'description-en': 'A utility-first CSS framework.',
    'description-es':
      'Es un framework de CSS utilitario que facilita la creación de interfaces web personalizables y responsivas.'
  },
  {
    name: 'Node.js',
    logo: '/node.webp',
    url: 'https://nodejs.org/',
    'description-en': "It is a JavaScript runtime environment based on the V8 engine, used to build scalable backend applications.",
    'description-es':
      'Es un entorno de ejecución de JavaScript basado en el motor V8, utilizado para construir aplicaciones backend escalables.'
  },
  {
    name: 'Express.js',
    logo: '/express.webp',
    url: 'https://expressjs.com/',
    'description-en': "It is a web framework for Node.js. It provides a set of tools that facilitate the creation of web applications and APIs.",
    'description-es':
      'Es un framework web para Node.js. Proporciona un conjunto de herramientas que facilitan la creación de aplicaciones web y API.'
  },
  {
    name: 'Sequelize',
    logo: '/sequelize.webp',
    url: 'https://sequelize.org/',
    'description-en': 'It is an ORM for Node.js that facilitates interaction with relational databases. It acts as a bridge between your JavaScript code and the database.',
    'description-es':
      'Es un ORM para Node.js que facilita la interacción con bases de datos relacionales. Actúa como un puente entre tu código JavaScript y la base de datos.'
  },
  {
    name: 'Postgres',
    logo: '/postgres.webp',
    url: 'https://www.postgresql.org/',
    'description-en': 'It is a robust database that offers a comprehensive set of features to store and manage large volumes of data efficiently and securely.',
    'description-es':
      'Es una base de datos robusta que ofrece un amplio conjunto de funciones para almacenar y gestionar grandes volúmenes de datos de forma eficaz y segura.'
  },
  {
    name: 'MongoDB',
    logo: '/mongodb.webp',
    url: 'https://www.mongodb.com/',
    'description-en': 'The most popular database for modern apps.',
    'description-es':
      'Es una base de datos NoSQL que usa documentos JSON para almacenar datos de manera flexible.'
  },
  {
    name: 'Docker',
    logo: '/docker.webp',
    url: 'https://www.docker.com/',
    'description-en': 'It is a tool that simplifies the creation and management of containers for software applications.',
    'description-es':
      'Es una herramienta que simplifica la creación y gestión de contenedores para aplicaciones software.'
  },
  {
    name: 'Astro',
    logo: '/astro.webp',
    url: 'https://astro.build/',
    'description-en': 'It is a framework for building web applications that combines static and dynamic rendering efficiently.',
    'description-es': 'Es un framework de trabajo para construir aplicaciones web que combina renderización estática y dinámica eficientemente.'
  },
  {
    name: 'Sass',
    logo: '/sass.webp',
    url: 'https://sass-lang.com/',
    'description-en': 'It is a CSS preprocessor that allows you to write more efficient and maintainable styles using variables and functions.',
    'description-es': 'Es un preprocesador de CSS que permite escribir estilos más eficientes y mantenibles utilizando variables y funciones.'
  },
  {
    name: 'Ant Design',
    logo: '/ant-design.webp',
    url: 'https://sass-lang.com/',
    'description-en': 'It is a library of user interface (UI) components, designed to build elegant and efficient user interfaces. ',
    'description-es': 'Es una biblioteca de componentes de interfaz de usuario (UI), diseñada para construir interfaces de usuario elegantes y eficientes. '
  },
  {
    name: 'Pinia',
    logo: '/pinia.webp',
    url: 'https://sass-lang.com/',
    'description-en': 'It is a state management library designed specifically for Vue.js. ',
    'description-es': 'Es una librería de gestión de estado diseñada específicamente para Vue.js. '
  },
  {
    name: 'Redux',
    logo: '/redux.webp',
    url: 'https://sass-lang.com/',
    'description-en': 'A predictable state management library for JavaScript applications.',
    'description-es': 'Es una biblioteca de gestión de estado predecible para aplicaciones JavaScript.'
  },
  {
    name: 'TanStack Query',
    logo: '/tanstack-query.webp',
    url: 'https://sass-lang.com/',
    'description-en': 'It is like an intelligent data manager, interacting with APIs, caching data and keeping it updated efficiently.',
    'description-es': 'Es como un gestor de datos inteligente, que se encarga de interactuar con las APIs, almacenar los datos en caché y mantenerlos actualizados de forma eficiente.'
  },
]

export const tools: TechnologyAndFramework[] = [
  {
    name: 'VS Code',
    logo: '/vscode.webp',
    url: 'https://code.visualstudio.com/',
    'description-en':
      'Code editor redefined and optimized for building and debugging modern web and cloud applications',
    'description-es':
      'Es un editor de código versátil y ligero, ideal para desarrollar software y aplicaciones web modernas.'
  },
  {
    name: 'Git',
    logo: '/git.webp',
    url: 'https://git-scm.com/',
    'description-en': 'A free and open source distributed version control system',
    'description-es': 'Es un sistema de control de versiones distribuido, crucial para el seguimiento y colaboración en proyectos de software.'
  },
  {
    name: 'Youtube music',
    logo: '/yt-music.webp',
    url: 'https://music.apple.com/',
    'description-en': '50 million songs. All ad-free',
    'description-es': 'Es un servicio de streaming de música que ofrece acceso a millones de canciones y contenido exclusivo.'
  },
  {
    name: 'Discord',
    logo: '/discord.webp',
    url: 'https://discord.com/',
    'description-en': 'Your place to talk',
    'description-es': 'Es una plataforma de comunicación para comunidades en línea, popular entre gamers y grupos sociales diversos.'
  },
  {
    name: 'Obsidian',
    logo: '/obsidian.webp',
    url: 'https://obsidian.md/',
    'description-en': 'A second brain, for you, forever',
    'description-es': 'Es un software de notas y conocimiento basado en Markdown, diseñado para organización y productividad personal avanzada.'
  },
  {
    name: 'Slack',
    logo: '/slack.webp',
    url: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software',
    'description-en': 'Chat, meet, call and collaborate',
    'description-es': 'Es una plataforma integral de colaboración empresarial de Microsoft, ideal para trabajo remoto y comunicación eficiente.'
  }
]

export const devices: TechnologyAndFramework[] = [
  {
    name: 'MacBook Air M2',
    logo: '/macbook.webp',
    'description-en': 'The ultimate pro notebook, MacBook Pro. The ultimate pro notebook, MacBook Pro. ',
    'description-es': 'Es una laptop potente con el chip M1 Pro de Apple, ideal para profesionales creativos.'
  },
  {
    name: 'Magic Keyboard',
    logo: '/keyboard.webp',
    'description-en': 'Magic Keyboard with Touch ID',
    'description-es': 'Es un teclado inalámbrico elegante y funcional diseñado para dispositivos como iPad.'
  },
  {
    name: 'Magic Mouse',
    logo: '/mouse.webp',
    'description-en': 'Magic Mouse',
    'description-es': 'Es un ratón inalámbrico con tecnología multitouch y diseño ergonómico para Mac.'
  },
  {
    name: 'Screen Samsumg S6',
    logo: '/screen.webp',
    'description-en': 'Screen Samsumg S6',
    'description-es': 'Es un monitor con alta resolución y colores precisos para uso profesional.'
  },
  {
    name: 'Sony WH-CH520',
    logo: '/headphone.webp',
    'description-en': 'Sony WH-1000XM4',
    'description-es': 'Son auriculares inalámbricos con cancelación de ruido y calidad de sonido excepcional para usuarios exigentes.'
  }
]