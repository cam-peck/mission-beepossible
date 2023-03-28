/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          'sun': 'rgb(233 208 67)',
          'mercury': 'rgb(176 176 176)',
          'venus': 'rgb(179 121 82)',
          'earth': 'rgb(96 168 240)',
          'mars': 'rgb(211 88 88)',
          'pluto': 'rgb(230 158 93)'
        },
        boxShadow: {
          'sun': '0 0 50px 10px rgb(241 241 152)'
        },
        keyframes: {
          circle: {
            '0%': { transform: 'rotateX(80deg) rotateZ(0)' },
            '100%': { transform: 'rotateX(80deg) rotateZ(360deg)' }
          }
        }
      },
    },
    plugins: [],
  };
