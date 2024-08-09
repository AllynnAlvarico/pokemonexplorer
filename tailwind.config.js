/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.ts',
    './src/**/*.html.ts',
  ],
  theme: {
    extend: {
      keyframes: {
        jiggle: {
          "0%": {
            transform: "scale3d(1, 1, 1)"
          },
          "30%": {
            transform: "scale3d(1.25, 0.75, 1)"
          },
          "40%": {
            transform: "scale3d(0.75, 1.25, 1)"
          },
          "50%": {
            transform: "scale3d(1.15, 0.85, 1)"
          },
          "65%": {
            transform: "scale3d(0.95, 1.05, 1)"
          },
          "75%": {
            transform: "scale3d(1.05, 0.95, 1)"
          },
          "100%": {
            transform: "scale3d(1, 1, 1)"
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: 0,
            transform: "translate3d(100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        jiggle: 'jiggle 1s ease-in-out 10s 3',
        fadeinright: 'fade-in-right 3s ease-in-out 0.25s 1',
        faderightfast: 'fade-in-right 0.8s ease-in-out 0.1 1',
      },
      colors: {
        'oil': '#1E1E1E',
        'gravel': '#444',
      },
    },
    screens: {
      'mobile': {'min': '360px', 'max': '414px'},
      'tablet': {'min': '601px', 'max': '1280px'}
    }
  },
  plugins: [],
}

