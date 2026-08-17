import { Html, Head, Main, NextScript } from 'next/document'

// v2 is a single light theme, so there is no theme class and no pre-paint
// script to restore one — the old dark-mode bootstrap lives in archive/v1.
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#FDFBF6" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
