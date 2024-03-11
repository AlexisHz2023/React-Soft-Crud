/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3870b3', // Azul Pastel
        'secondary':'#0c4ca4', // Azul fuerte
        'Third': '#f49825' // Anaranjado
      }
    }
  },
  plugins: [],
}

