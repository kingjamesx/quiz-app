/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "land-pattern": "url('../public/images/land-pattern.png')",
        "hero-woman": "url('../public/images/Background.png')",
      },
      boxShadow: {
        float: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        "accent-2": "#048481",
        "primary-2/400": "#F58025",
      },
    },
  },
  plugins: [],
};
