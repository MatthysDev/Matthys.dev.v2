import { Html, Head, Main, NextScript } from 'next/document'

// Applies the saved theme before first paint to avoid a flash. Dark is the default.
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})()`

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta
          name="theme-color"
          content="#FAF5EB"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#050505"
          media="(prefers-color-scheme: dark)"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
