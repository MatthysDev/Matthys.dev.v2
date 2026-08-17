import type { Config } from 'tailwindcss'

/**
 * Utilities only — `src/styles/tailwind.css` pulls in `@tailwind utilities`
 * and nothing else, so preflight never touches the hand-written v2 layer.
 * The tokens below mirror the custom properties in `src/styles/v2.css` so a
 * utility and a component class can never disagree about the palette.
 */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        ink: {
          DEFAULT: 'var(--ink)',
          soft: 'var(--ink-soft)',
          faint: 'var(--ink-faint)',
        },
        lime: {
          DEFAULT: 'var(--lime)',
          deep: 'var(--lime-deep)',
        },
        coral: 'var(--coral)',
        violet: 'var(--violet)',
        sky: 'var(--sky)',
        teal: 'var(--teal)',
        sand: 'var(--sand)',
        blue: 'var(--blue)',
        pink: 'var(--pink)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
    },
  },
  plugins: [],
}

export default config
