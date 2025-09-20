export default {
  theme: {
    extend: {
       fontFamily: {
        halcom: ['Halcom', 'sans-serif'],
        halcomLight: ["'Halcom-Light'", "sans-serif"],
        halcomMedium: ["'Halcom-Medium'", "sans-serif"],
      },
      willChange: {
        transform: 'transform',
        opacity: 'opacity',
        'transform-opacity': 'transform, opacity',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
    },
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
}
