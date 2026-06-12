import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

export type PostMeta = {
    slug: string
    title: string
    description: string
    date: string
    tags: string[]
    readingTime: string
}

export type Post = PostMeta & { content: string }

function parsePost(slug: string): Post {
    const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.mdx`), 'utf8')
    const { data, content } = matter(raw)

    for (const field of ['title', 'description', 'date'] as const) {
        if (!data[field]) {
            throw new Error(`Post "${slug}": missing required frontmatter field "${field}"`)
        }
    }

    return {
        slug,
        title: String(data.title),
        description: String(data.description),
        date: new Date(data.date).toISOString(),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        readingTime: readingTime(content).text,
        content,
    }
}

export function getPostSlugs(): string[] {
    if (!fs.existsSync(POSTS_DIR)) return []
    return fs
        .readdirSync(POSTS_DIR)
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => file.replace(/\.mdx$/, ''))
}

/** Métadonnées de tous les posts, triés du plus récent au plus ancien. */
export function getAllPosts(): PostMeta[] {
    return getPostSlugs()
        .map((slug) => {
            const { content: _content, ...meta } = parsePost(slug)
            return meta
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): Post {
    return parsePost(slug)
}
