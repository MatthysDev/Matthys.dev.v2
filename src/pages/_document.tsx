import { Html, Head, Main, NextScript } from 'next/document'

// v2 is a single light theme, so there is no theme class and no pre-paint
// script to restore one — the old dark-mode bootstrap lives in archive/v1.
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 32px for the tab, 512px for everything that wants to scale up. */}
        <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#FDFBF6" />
        {/* Runs before first paint: gates the scroll-reveal styles on JS being
            alive, and avoids a flash of hidden content on hydration. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
