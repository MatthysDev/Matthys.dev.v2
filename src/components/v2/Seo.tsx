import Head from 'next/head'

const SITE = 'https://www.matthys.dev'

export default function Seo({
  title,
  description,
  path,
}: {
  title: string
  description: string
  /** absolute path, e.g. `/projects/ekklo` */
  path: string
}) {
  const url = `${SITE}${path}`
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE}/og.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@matthysdev" />
    </Head>
  )
}
