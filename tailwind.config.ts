import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily :{
        inter : ['Inter', "sans-serif"],
        
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        'darkone': '#0a0a0aff',
        'grayone' : '#212126ff',
        'graylite' : '#34363dff',
        'accent' : '#3bff89ff',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  darkMode : 'class'
}
export default config
