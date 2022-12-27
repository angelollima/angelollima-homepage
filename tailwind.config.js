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
      animation: {
        background: 'background ease infinite',
      },
      keyframes: {
        background: {
          '0%, 100%': { backgroundPosition: '0% 100%' },
          '50%': { backgroundPosition: '100% 200%' },
        },
      }
    },
  },
  plugins: [],
}