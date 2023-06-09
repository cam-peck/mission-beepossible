/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        circle: {
          '0%': { transform: 'rotateX(80deg) rotateZ(0)' },
          '50%': { transform: 'rotateX(100deg) rotateZ(180deg)' },
          '100%': { transform: 'rotateX(80deg) rotateZ(360deg)' },
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
          '100%': { transform: 'rotateX(-80deg) rotateY(360deg)' },
        },
        twinkle: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5) rotateZ(180deg)' },
          '100%': { transform: 'scale(1) rotateZ(360deg)' },
        },
        idle: {
          '0%, 100%': { transform: 'scale(1) rotate(5deg)' },
          '50%': { transform: 'scale(1.05) rotate(-5deg)' },
        },
        zoom: {
          '0%, 100%': {
            transform: 'translateY(-50px) rotate(-5deg)',
          },
          '50%': {
            transform: 'translateY(50px) rotate(5deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
