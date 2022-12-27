/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        amethyst_bg_light: '#bdc7dd',
        yellow_bg_light: '#ffff99',
        blue_bg_dark: '#50769b',
        cian_bg_dark:'#00426f',
        transparent_screen: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        MPlus: ['M PLUS Rounded 1c', 'sans-serif']
      },
      borderColor: {
        transparent_border: 'rgba(255, 255, 255, 0.14)',
      },
      boxShadow: {
        r_b_shadow: '1px 1px 1px 1px rgba(77, 40, 40, 0.212)',
        top_shadow: '1px -1px 1px 1px rgba(77, 40, 40, 0.212)',
        shadow: '1px 1px 1px 1px rgba(77, 40, 40, 0.212)',
      },
      keyframes: {
        lightBackground: {
          '0%': {
            background: '#f0e7db'
          },
          '37%': {
            background: '#e6d9b3'
          },
          '63%': {
            background: '#e6d9b3'
          },
          '100%': {
            background: '#f0e7db'
          }
        },
        darkBackground: {
          '0%': {
            background: '#8a6e4a'
          },
          '37%': {
            background: '#202023'
          },
          '63%': {
            background: '#202023'
          },
          '100%': {
            background: '#8a6e4a'
          }
        },
        lightMenuBackground: {
          '0%': {
            background: '#e6d9b3'
          },
          '37%': {
            background: '#f0e7db'
          },
          '63%': {
            background: '#f0e7db'
          },
          '100%': {
            background: '#e6d9b3'
          }
        },
        darkMenuBackground: {
          '0%': {
            background: '#202023'
          },
          '37%': {
            background: '#8a6e4a'
          },
          '63%': {
            background: '#8a6e4a'
          },
          '100%': {
            background: '#202023'
          }
        },
      },
    },
  },
  plugins: [],
}