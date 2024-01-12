import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#AD1FFF',
        'primary-background': '#3C005E',
        'contrast-dark': '#000',
        'contrast-light': '#fff',
        'border': '#2B2B2B',
        'text': '#A1A1A1',
        'background': '#0D0D0D',
      }
    },
  },
  plugins: [],
}
export default config
