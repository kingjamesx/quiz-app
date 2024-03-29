/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      mont: ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'land-pattern': "url('/images/land-pattern.png')",
        'recommendations-pattern': "url('/images/recommendations-pattern.png')",
        'total-results-pattern': "url('/images/total-results-pattern.png')",
        'testimonial-pattern': "url('/images/testimonial-pattern.png')",
        'footer-pattern': "url('/images/footer-pattern.png')",
      },
      boxShadow: {
        float: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'accent-2': '#048481',
        'primary-2/400': '#F58025',
        'Primary-2/50': '#FCD5B6',
        'primary-2/0': '#FEF9F4',
        'primary-2/500': '#CC6B1F',
        primary: '#292627',
        secondary: '#5D5658',
        'primary-2/100': '#FABF92',
        'primary-2/900': '#311A07',
        platform: '#E8E6E6',
        rectangle: '#72E037',
        'primary-2/300': '#F79549',
        cta: '#58ADAB',
      },
    },
  },
  plugins: [],
  screens: {
    'xs': '300px',
    'sm': '576px',
    // => @media (min-width: 576px) { ... }
  
    'md': '768px',
    // => @media (min-width: 768px) { ... }
  
    'lg': '992px',
    // => @media (min-width: 992px) { ... }
  
    'xl': '1200px',
    // => @media (min-width: 1200px) { ... }
  },
};
