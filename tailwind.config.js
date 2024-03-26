module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'katibeh': ['katibeh', 'sans-serif'],
        'montserrat-regular': ['montserrat-regular', 'sans-serif'],
      },
      colors: {
        'elefantes-yellow': '#F3EBCB',
        'elefantes-orange': '#E5542C',
        'elefantes-green': '#03576B',
      },
      backgroundImage: {
        'workation': "url('public/images/workation.png')",
      }
    }
  },
  plugins: [],
}