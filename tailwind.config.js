/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      c2xl: { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      cxl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      clg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      cmd: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      csm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        ibmPlexMono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
