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
            '50%': { transform: 'rotateX(100deg) rotateZ(180deg)' },
            '100%': { transform: 'rotateX(80deg) rotateZ(360deg)' }
          },
          front: {
            '0%': { transform: 'rotateX(-80deg) rotateY(0)' },
            '8%': { transform: 'rotateX(-80deg) rotateY(10deg)' },
            '16%': { transform: 'rotateX(-80deg) rotateY(40deg)' },
            '24%': { transform: 'rotateX(-80deg) rotateY(80deg)' },
            '32%': { transform: 'rotateX(-80deg) rotateY(100deg)' },
            '40%': { transform: 'rotateX(-80deg) rotateY(120deg)' },
            '48%': { transform: 'rotateX(-80deg) rotateY(180deg)' },
            '56%': { transform: 'rotateX(-80deg) rotateY(180deg)' },
            '64%': { transform: 'rotateX(-80deg) rotateY(210deg)' },
            '72%': { transform: 'rotateX(-80deg) rotateY(250deg)' },
            '80%': { transform: 'rotateX(-80deg) rotateY(300deg)' },
            '88%': { transform: 'rotateX(-80deg) rotateY(330deg)' },
            '96%': { transform: 'rotateX(-80deg) rotateY(360deg)' },
            '100%': { transform: 'rotateX(-80deg) rotateY(360deg)' }
          }
        }
      },
    },
    plugins: [],
  };
