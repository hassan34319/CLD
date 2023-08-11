import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "sugar": "#F7FBFE",
        "coral" : "#FF6F61",
        "tiffany" : "#0ABAB5"
      },
      fontSize: {
        xxs: '0.5rem',
        xxss: '0.3rem',
      }
    },
  },
  plugins: [],
}
export default config
