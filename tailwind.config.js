/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './js/*.js',
  ],
  theme: {
    extend: {
      colors: {
        encre: '#1C1B19',
        'encre-douce': '#42413D',
        sable: '#FBF9F4',
        'sable-fonce': '#F2EDE2',
        terre: '#A8693E',
        'terre-fonce': '#7C4B2A',
        'vert-bouteille': '#33483B',
        ligne: '#DFD9C9',
        erreur: '#B94040',
        succes: '#2D6A4F',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
