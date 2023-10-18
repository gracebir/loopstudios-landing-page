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
        'hero-desk': "url('/images/desktop/image-hero.jpg')",
        'hero-mob': "url('/images/mobile/image-hero.jpg')",
        'interactive-desk': "url('/images/desktop/image-interactive.jpg')",
        'interactive-mob': "url('/images/mobile/image-interactive.jpg')",
        'deep-earth-desk': "url('/images/desktop/image-deep-earth.jpg')",
        'deep-earth-mob': "url('/images/mobile/image-deep-earth.jpg')",
        'night-arcade-desk': "url('/images/desktop/image-night-arcade.jpg')",
        'night-arcade-mob': "url('/images/mobile/image-night-arcade.jpg')",
        'soccer-desk': "url('/images/desktop/image-soccer-team.jpg')",
        'soccer-mob': "url('/images/mobile/image-soccer-team.jpg')",
        'grid-desk': "url('/images/desktop/image-grid.jpg')",
        'grid-mob': "url('/images/mobile/image-grid.jpg')",
        'above-desk': "url('/images/desktop/image-from-above.jpg')",
        'above-mob': "url('/images/mobile/image-from-above.jpg')",
        'pocket-desk': "url('/images/desktop/image-pocket-borealis.jpg')",
        'pocket-mob': "url('/images/mobile/image-pocket-borealis.jpg')",
        'curiosity-desk': "url('/images/desktop/image-curiosity.jpg')",
        'curiosity-mob': "url('/images/mobile/image-curiosity.jpg')",
        'fisheye-desk': "url('/images/desktop/image-fisheye.jpg')",
        'fisheye-mob': "url('/images/mobile/image-fisheye.jpg')",
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
