/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'headings': '#333333',
        'accent-color': '#7C3AED',
        'background-color': '#F1F5F9',
        'card-background': '#FFFFFF',
        'chart-by-uf-color': '#7467C9',
        'chart-by-party-color': '#7467C9'
      }
    },
  },
  plugins: [],
}

