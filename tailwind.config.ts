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
        
      },
      colors: {
        "dark-gray": "var(--dark-gray)",
        "very-dark-gray": "var(--very-dark-gray)",
        "white-color": "var(--white)",
        "black-color": "var(--black)",
      }
    },
  },
  plugins: [],
}
export default config
