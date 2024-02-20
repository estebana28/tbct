const defaultTheme = require('tailwindcss/defaultTheme')

const colors = require('tailwindcss/colors')
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './app/**/*.{js,ts,jsx,tsx,mdx}',
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // colors: {
    //   primary: {
    //     500: '#001C30',
    //   },
    //   lightPrimary: {
    //     500: '#176B87',
    //   },
    //   secondary: {
    //     500: '#64CCC5',
    //   },
    //   lightSecondary: {
    //     500: '#DAFFFB',
    //   },
    // },
    extend: {
      colors: {
        primary: {
          500: '#001C30',
        },
        lightPrimary: {
          500: '#176B87',
        },
        secondary: {
          500: '#64CCC5',
        },
        lightSecondary: {
          500: '#DAFFFB',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  )

  addBase({
    ':root': newVars,
  })
}
