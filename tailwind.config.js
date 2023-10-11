{ import('tailwindcss').Config }

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      grayscale: {
        50: '50%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

      },
      screens: {

        'xs': '475px',

        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },

    colors: {
      'udemBlue': '#0F3B7D',
      'white': '#ffffff',
      'udemLightBlue': '#aecbeb',
      'currentPage': '#71bedc',
      transparent: 'transparent',
      'summer': '#ff6600',
      'winter': '#68BBE3',

    },
    
  },
  plugins: [
  ],
});
