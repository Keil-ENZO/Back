module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        text: ['"Bebas Neue"', 'sans-serif'],
        title: ['"Nunito"', 'sans-serif'],
        bigTitle: ['"Bespoke Stencil"', 'sans-serif'],
      },
      colors: {
        primary: '#007BFF',
        secondary: '#333333',
        highlight: '#FF4500',
      },
      fontSize: {
        text: '16px',
        title: '16vw',
      },
      backgroundColor: {
        primary: '#FFFFFF',
        content: '#F5F5F5',
      },
      borderColor: {
        default: '#CCCCCC',
      },
      textColor: {
        primary: '#000000',
        title: '#007BFF',
        icons: '#333333',
      },
    },
  },
  plugins: [],
}
