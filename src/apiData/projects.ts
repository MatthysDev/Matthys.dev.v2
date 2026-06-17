export type ProjectCategory = 'product' | 'client' | 'lab'

export type Project = {
    name: string
    category: ProjectCategory
    /** What I did — short role line. */
    role?: string
    /** One-line summary shown on the card. */
    description: string
    /** Longer text shown in the expanded modal. */
    longDescription?: string
    stack?: string[]
    /** Emoji/glyph fallback when there's no logo. */
    img: string
    /** Path to a logo in /public/clients (clients). */
    logo?: string
    websiteUrl?: string
    status?: 'live' | 'building' | 'shipped' | 'open-source'
    /** Year or range, e.g. '2024' or '2022–2024'. Shown on the card. */
    year?: string
    /** App Store listing URL (shows an App Store button in the modal). */
    appStoreUrl?: string
    /** Google Play listing URL (shows a Play Store button in the modal). */
    playStoreUrl?: string
    /** Store rating, e.g. '4.8'. Shown with a star in the modal. */
    rating?: string
    /** One-line measurable impact, e.g. '3,000+ daily users'. Shown in the modal. */
    impact?: string
    /** Link to a case-study / write-up (internal or external). */
    caseStudyUrl?: string
}

// ---------------------------------------------------------------------------
// Products — things I build and own.
// ---------------------------------------------------------------------------
const products: Project[] = [
    {
        name: 'Ekklo',
        category: 'product',
        role: 'Head of Mobile',
        description: 'All-in-one platform for fitness coaches.',
        longDescription:
            'As Head of Mobile at Ekklo, I lead the mobile apps for an all-in-one platform that helps fitness coaches run their business: training and nutrition programs, client tracking, messaging and payments. Built with Expo and used daily by thousands of coaches and athletes.',
        stack: ['Expo', 'React Native', 'TypeScript', 'EAS'],
        img: '🏋️',
        logo: '/clients/ekklo.png',
        websiteUrl: 'https://www.ekklo.com',
        status: 'live',
        appStoreUrl: 'https://apps.apple.com/fr/app/ekklo/id6499107970',
        rating: '4.7 · 198 ratings',
        impact: '3,000+ daily active coaches & athletes',
    },
    {
        name: 'Leaf',
        category: 'product',
        role: 'Solo — design & dev',
        description: 'A plant care logbook for iOS & Android.',
        longDescription:
            'A personal, multi-user plant logbook. Recurring care tasks with local notifications, a dated photo journal per plant, and a Today view that gathers every care task that’s due. Built on Expo SDK 56, Expo Router and Supabase, with Legend State and react-native-vision-camera.',
        stack: ['Expo SDK 56', 'Supabase', 'Legend State', 'Vision Camera'],
        img: '🌿',
        status: 'building',
    },
    {
        name: 'simgrid',
        category: 'product',
        role: 'Solo — design & dev',
        description: 'One grid for all your simulators.',
        longDescription:
            'A CLI that runs multiple Expo projects across multiple simulators and emulators in parallel — no more alt-tab dance. It reads each project’s identity, keeps a shared device registry, then routes, boots, starts Metro and deep-links the dev client. Node.js + TypeScript, MIT-licensed.',
        stack: ['Node.js', 'TypeScript', 'CLI'],
        img: '▦',
        websiteUrl: 'https://matthysdev.github.io/simgrid/',
        status: 'building',
    },
    {
        name: 'matthys.dev',
        category: 'product',
        role: 'Solo — design & dev',
        description: 'This website.',
        longDescription:
            'The site you are reading — a blueprint design, an MDX blog with shiki-highlighted code, an RSS feed and a sprinkle of framer-motion. Built with Next.js, Tailwind and MDX, redesigned whenever the mood strikes.',
        stack: ['Next.js', 'Tailwind', 'MDX'],
        img: '</>',
        websiteUrl: 'https://www.matthys.dev',
        status: 'live',
    },
]

// ---------------------------------------------------------------------------
// Client work — companies I shipped mobile & web for.
// ---------------------------------------------------------------------------
const clientWork: Project[] = [
    {
        name: 'weshipit.today',
        category: 'client',
        role: 'Founder',
        description: 'My studio — web & mobile for startups.',
        longDescription:
            'My own studio: web and mobile apps for startups and small teams, built in an Nx monorepo with a Storybook design system. It’s also home to Le Cross Platform Show, the francophone React Native podcast I co-host.',
        stack: ['Next.js', 'Nx', 'React Native', 'Storybook'],
        img: '🚀',
        logo: '/clients/weshipit.png',
        websiteUrl: 'https://weshipit.today',
        status: 'live',
    },
    {
        name: 'DrData',
        category: 'client',
        role: 'Mobile developer',
        description: 'Initiated and built the first mobile app.',
        longDescription:
            'I initiated the project and built the first version of the mobile app in React Native and TypeScript, then shipped it to the stores.',
        stack: ['React Native', 'TypeScript'],
        img: '👨‍⚕️',
        logo: '/clients/drdata.png',
        websiteUrl: 'https://drdata.io',
        status: 'shipped',
    },
    {
        name: 'Deki',
        category: 'client',
        role: 'Mobile developer',
        description: 'Refactored and shipped the mobile app.',
        longDescription:
            'Refactored the mobile app with React Native and TypeScript and shipped it to the Google Play Store.',
        stack: ['React Native', 'TypeScript'],
        img: '📱',
        logo: '/clients/deki.png',
        websiteUrl: 'https://www.deki.team',
        status: 'shipped',
    },
    {
        name: 'Talib',
        category: 'client',
        role: 'Mobile developer',
        description: 'Migrated the app to TypeScript, shipped features.',
        longDescription:
            'Migrated the mobile app from JavaScript to TypeScript, added new features and shipped it to the store.',
        stack: ['React Native', 'TypeScript'],
        img: '🤲',
        logo: '/clients/talib.png',
        websiteUrl: 'https://talibapp.com',
        status: 'shipped',
    },
    {
        name: 'Shoootin',
        category: 'client',
        role: 'Mobile developer',
        description: 'On-demand real-estate photography platform.',
        longDescription:
            'On-demand real-estate photography, video and Matterport tours for agents across the US. I worked on the photographers’ mobile app in the monorepo.',
        stack: ['React Native', 'TypeScript'],
        img: '📸',
        logo: '/clients/shoootin.png',
        websiteUrl: 'https://shoootin.com',
        status: 'shipped',
    },
    {
        name: 'Karnott',
        category: 'client',
        role: 'Mobile developer',
        description: 'Connected agriculture — farm equipment tracking.',
        longDescription:
            'A connected-agriculture startup that tracks and analyses farm equipment usage in real time. I worked on the React Native mobile app.',
        stack: ['React Native'],
        img: '🚜',
        logo: '/clients/karnott.png',
        websiteUrl: 'https://www.karnott.com',
        status: 'shipped',
    },
    {
        name: 'Filter Off',
        category: 'client',
        role: 'Mobile developer',
        description: 'Video speed-dating app.',
        longDescription:
            'A video speed-dating app — get to know the person, not the profile. I worked on the React Native mobile app.',
        stack: ['React Native'],
        img: '💘',
        logo: '/clients/filteroff.png',
        websiteUrl: 'https://www.getfilteroff.com',
        status: 'shipped',
    },
    {
        name: 'Studio Low Cost',
        category: 'client',
        role: 'Frontend developer',
        description: 'Set up Storybook and a component library.',
        longDescription:
            'Set up Storybook and built a reusable component library with React and TypeScript.',
        stack: ['React', 'TypeScript', 'Storybook'],
        img: '🎨',
        logo: '/clients/slc.png',
        websiteUrl: 'http://www.studio-lowcost.com',
        status: 'shipped',
    },
    {
        name: 'Human Coders',
        category: 'client',
        role: 'Trainer',
        description: 'France’s developer-training company.',
        longDescription:
            'One of France’s best-known developer-training companies. I ran React Native training for their developers.',
        stack: ['React Native'],
        img: '🧑‍🏫',
        logo: '/clients/humancoders.png',
        websiteUrl: 'https://www.humancoders.com',
        status: 'shipped',
    },
    {
        name: 'ECV School',
        category: 'client',
        role: 'Teacher',
        description: 'Taught a React Native bootcamp.',
        longDescription:
            'My first bootcamp as a teacher in a school: I taught students how to build a React Native app with TypeScript and deploy it to the Google Play Store.',
        stack: ['React Native', 'TypeScript'],
        img: '📚',
        logo: '/clients/ecv.png',
        websiteUrl: 'https://ecv.digital',
        status: 'shipped',
    },
]

// ---------------------------------------------------------------------------
// Lab — open-source, demos and experiments.
// ---------------------------------------------------------------------------
const lab: Project[] = [
    {
        name: 'expo-router-protected-routes',
        category: 'lab',
        role: 'Open source',
        description: 'Expo Router protected routes demo.',
        longDescription:
            'A pedagogical Expo Router demo: protected routes with Stack.Protected and automatic redirection, a SecureStore session and Face ID.',
        stack: ['Expo Router', 'TypeScript'],
        img: '🔐',
        websiteUrl: 'https://github.com/MatthysDev/expo-router-protected-routes',
        status: 'open-source',
    },
    {
        name: 'uniwind-theme-transition-repro',
        category: 'lab',
        role: 'Open source',
        description: 'Minimal repro for a Uniwind/iOS issue.',
        longDescription:
            'A minimal reproduction of a Uniwind theme-transition overlay issue with react-native-screens native-stack on iOS (Expo SDK 56 / RN 0.85 / Fabric).',
        stack: ['Expo', 'React Native'],
        img: '🐛',
        websiteUrl: 'https://github.com/MatthysDev/uniwind-theme-transition-repro',
        status: 'open-source',
    },
    {
        name: 'alfred-tailwind-colors',
        category: 'lab',
        role: 'Open source',
        description: 'Alfred workflow for Tailwind colors.',
        longDescription:
            'An Alfred 4 workflow to quickly find the perfect color in the Tailwind color palette.',
        stack: ['Alfred', 'JavaScript'],
        img: '🎨',
        websiteUrl: 'https://github.com/MatthysDev/alfred-tailwind-colors',
        status: 'open-source',
    },
    {
        name: 'raycast-tailwind-colors',
        category: 'lab',
        role: 'Open source',
        description: 'Raycast extension for Tailwind colors.',
        longDescription:
            'A Raycast extension to quickly search the Tailwind CSS color palette and copy any shade as hex, RGB or a Tailwind class — without leaving your keyboard.',
        stack: ['Raycast', 'TypeScript', 'React'],
        img: '🌈',
        websiteUrl: 'https://github.com/MatthysDev/raycast-tailwind-colors',
        status: 'open-source',
    },
    {
        name: 'DearValentine',
        category: 'lab',
        role: 'Side project',
        description: 'Send a date invitation to your crush.',
        longDescription:
            'A website to send a love letter or a date invitation to your crush: write a letter, pick a theme and an activity, and send it. Built with Next.js, Tailwind and Supabase.',
        stack: ['Next.js', 'Tailwind', 'Supabase'],
        img: '❤️',
        websiteUrl: 'https://dear-valentine.vercel.app',
        status: 'live',
    },
    {
        name: 'One Advice',
        category: 'lab',
        role: 'Side project',
        description: 'Share your best advice with the world.',
        longDescription:
            'A website to share your best advice with the world. Built with Tamagui (Takeout starter) and Supabase.',
        stack: ['Tamagui', 'Supabase'],
        img: '🤔',
        websiteUrl: 'https://one-advice.vercel.app',
        status: 'live',
    },
]

export const projects: Project[] = [...products, ...clientWork, ...lab]

export type ProjectSection = {
    key: ProjectCategory
    index: string
    label: string
    title: string
    intro: string
}

export const projectSections: ProjectSection[] = [
    {
        key: 'product',
        index: '06',
        label: 'products',
        title: 'Products',
        intro: 'Things I build and own — full-time and on the side.',
    },
    {
        key: 'client',
        index: '07',
        label: 'client work',
        title: 'Client work',
        intro: 'Companies I shipped mobile and web for over the last six years.',
    },
    {
        key: 'lab',
        index: '08',
        label: 'lab',
        title: 'Lab',
        intro: 'Open-source, demos and experiments.',
    },
]
