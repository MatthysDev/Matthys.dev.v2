import '@/styles/v2.css'
// Utilities only, loaded last so a utility can win over the component layer.
// Preflight is deliberately left out: v2.css is the reset and the design system,
// and Tailwind's base layer would fight it.
import '@/styles/tailwind.css'

import type { AppProps } from 'next/app'
import { Caveat, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const script = Caveat({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* v2.css reads the families through these two custom properties. */}
      <style jsx global>{`
        :root {
          --font-sans: ${sans.style.fontFamily};
          --font-script: ${script.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
