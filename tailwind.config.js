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
  plugins: [],
}
