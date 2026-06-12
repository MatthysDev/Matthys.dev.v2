import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const SITE_URL = 'https://www.matthys.dev'
const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')
const PUBLIC_DIR = path.join(process.cwd(), 'public')

const escapeXml = (value) =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')

const posts = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
        const { data } = matter(fs.readFileSync(path.join(POSTS_DIR, file), 'utf8'))
        if (!data.title || !data.description || !data.date) {
            throw new Error(`generate-feeds: frontmatter incomplet dans ${file}`)
        }
        return {
            slug: file.replace(/\.mdx$/, ''),
            title: data.title,
            description: data.description,
            date: new Date(data.date),
        }
    })
    .sort((a, b) => b.date - a.date)

const rssItems = posts
    .map(
        (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid>${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${post.date.toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`
    )
    .join('\n')

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Matthys Ducrocq — Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Notes from building Ekklo with Expo and React Native.</description>
    <language>en</language>
${rssItems}
  </channel>
</rss>
`

const staticPages = ['', '/blog', '/portfolio']
const urls = [
    ...staticPages.map((page) => `  <url><loc>${SITE_URL}${page}</loc></url>`),
    ...posts.map(
        (post) =>
            `  <url><loc>${SITE_URL}/blog/${post.slug}</loc><lastmod>${post.date.toISOString()}</lastmod></url>`
    ),
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`

fs.writeFileSync(path.join(PUBLIC_DIR, 'rss.xml'), rss)
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap)
console.log(`generate-feeds: ${posts.length} post(s) → public/rss.xml, public/sitemap.xml`)
