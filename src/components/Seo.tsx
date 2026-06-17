import Head from 'next/head'

const SITE_URL = 'https://www.matthys.dev'
const DEFAULT_DESC =
    'Matthys Ducrocq — React Native & Expo developer from Lille and founder of weshipit. I build highly-rated mobile apps used daily by thousands, lead mobile at Ekklo, and write about real-world mobile development.'

type SeoProps = {
    title?: string
    description?: string
    path?: string
    image?: string
    type?: 'website' | 'article'
    noIndex?: boolean
}

export default function Seo({
    title,
    description,
    path,
    image,
    type = 'website',
    noIndex,
}: SeoProps) {
    const fullTitle = title
        ? `${title} — Matthys Ducrocq`
        : 'Matthys Ducrocq — React Native & Expo Developer'
    const desc = description ?? DEFAULT_DESC
    const canonical = SITE_URL + (path ?? '')
    const absoluteImage = image?.startsWith('http')
        ? image
        : SITE_URL + (image ?? '/og.png')

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={desc} />
            <link rel="canonical" href={canonical} />

            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={desc} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@MatthysDev" />
            <meta name="twitter:creator" content="@MatthysDev" />
            <meta name="twitter:image" content={absoluteImage} />

            {noIndex && <meta name="robots" content="noindex" />}
        </Head>
    )
}
