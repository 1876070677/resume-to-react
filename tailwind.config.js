/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: 'var(--blue)',
        gray: 'var(--gray)',
        graylight: 'var(--gray-light)',
        graydeep: 'var(--gray-deep)',
        graydeepdark: 'var(--gray-deep-dark)',
        graydeeplight: 'var(--gray-deep-light)',
        bluelight: 'var(--blue-light)',
        greendeep: 'var(--green-deep)',
      }
    },
    fontFamily: {
      'pretendard': ['Pretendard', 'sans-serif'],
      'parisienne': ["Parisienne", "cursive"],
    },
    lineHeight: {
        '18': '1.8',
      },
  },
  plugins: [],
}
