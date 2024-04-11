/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        lightPink: '#F5EDDC',
        secondaryBg: '#DBD4C5',
        primaryText: '#75726A',
        secondatyText: '#A8A397',
      },
    },
  },
  plugins: [],
}
