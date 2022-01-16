// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fade: "fadeOut 0.5s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      }),
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      app: {
        blue: {
          DEFAULT: "#133AC5"
        },
        primary: {
          DEFAULT: "#500673",
          50: "#7433930d",
          60: '#DBAAE826',
          100: "#743393",
          light: '#9255A2'
        },
        yellow: {
          100: '#FCD94A',
          200: '#fcd535',
          700: '#BD9205',
          DEFAULT: '#F0B90B',
          dark: '#C99400',
          light: '#FEF6D8',
        },
        red: {
          DEFAULT: '#DF1111',

        },
        green: {
          DEFAULT: '#0ECB81',
          dark: '#038A41'
        },
        gray: {
          10: '#ffffff30',
          20: '#F3F4F6',
          30: "#E6E7EB",
          60: '#6B7380',
          200: '#9CA2AE',
          300: '#D1D4DB',
          400: '#E6E7EB',
          600: '#6B7380'
        },
        black: {
          100: '#111828',
          80: '#384152',
          60: '#6B7380',
          50: '#9CA2AE'
        },
        transparent: {
          DEFAULT: "#00000080"
        }
      },
    },
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "0.125rem",
      0.6: "0.15625rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      3.6: "15px",
      4: "1rem",
      5: "1.25rem",
      5.5: "21px",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      12.5: "3.125rem",
      12.6: "3.25rem",
      13: "3.375rem",
      14: "3.5rem",
      15: "3.875rem",
      16: "4rem",
      17: '4.5rem',
      18: "4.875rem",
      19: "77px",
      20: "5rem",
      21: "5.25rem",
      24: "6rem",
      25: "6.5rem",
      28: "7rem",
      29: '7.5rem',
      32: "8rem",
      36: "9rem",
      40: "10rem",
      43: "10.875rem",
      44: "11rem",
      45: '11.25rem',
      46: "11.75rem",
      48: "12rem",
      49: "12.5rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      82: "22rem",
      96: "24rem",
      97: "30rem",
      98: "34.125rem",
      99: "44rem",
      100: "48rem",
      110: "60rem",
      115: "75rem",
      120: "84rem",
      400: '400px',

    },
    minWidth: {
      0: "0px",
      60: "15rem",
      80: "20rem",
      90: "25rem",
      100: "48rem",
      120: "64rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
    },
    maxWidth: {
      0: "0px",
      5: "10.5rem",
      60: "15rem",
      80: "20rem",
      90: "25rem",
      100: "48rem",
      115: "75rem",
      120: "64rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
    },
    minHeight: {
      sm: "8.75rem",
      md: "13rem"
    },
    fontSize: {
      'xxs': '10px',
      'xs': '12px',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    },
    screens: {
      'tiny': "375px",

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
  variants: {
    extend: {},
  },
  plugins: [],
};
