import { projects, type Project } from '@/apiData/projects'

/** Apps shown in the home-screen grid, in display order. */
const GRID_NAMES = [
    'Ekklo',
    'Leaf',
    'simgrid',
    'matthys.dev',
    'DearValentine',
    'One Advice',
    'expo-router-protected-routes',
    'alfred-tailwind-colors',
] as const

/** Apps pinned in the dock (the 4 personal products). */
const DOCK_NAMES = ['Ekklo', 'Leaf', 'simgrid', 'matthys.dev'] as const

export type ShowcaseApp = Project & {
    /** Where the icon links to. */
    href: string
    /** True when href points to an external site (open in new tab). */
    external: boolean
}

function toShowcaseApp(name: string): ShowcaseApp {
    const project = projects.find((p) => p.name === name)
    if (!project) {
        throw new Error(`PhoneShowcase: unknown project "${name}"`)
    }
    const external = Boolean(project.websiteUrl)
    return {
        ...project,
        href: project.websiteUrl ?? '/portfolio',
        external,
    }
}

export const gridApps: ShowcaseApp[] = GRID_NAMES.map(toShowcaseApp)
export const dockApps: ShowcaseApp[] = DOCK_NAMES.map(toShowcaseApp)
