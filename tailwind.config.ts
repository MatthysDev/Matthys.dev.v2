import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Optionally extend other theme properties here
    },
  },
  plugins: [
    // Define a custom plugin for the neonBlack text shadow
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.neon-black': {
          textShadow: '1px 1px 1px black, 0 0 1em black, 0 0 0.1em black',
        },
        '.neon-white': {
          textShadow: '0.3px 0.3px 0.3px white, 0 0 0.3em white, 0 0 0.05em white',
        }
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

export default config
