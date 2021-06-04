module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.354rem',
      'sm': '.5rem',
      'tiny': '.707rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5.653rem',
    },
    boxShadow:{
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: "rgba(50,50,93, 0.25) 0px 50px 100px -20px, rgba(0,0,0,0.3) 0px 30px 60px -30px",
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    extend: {
      colors: {
        'bluetiful': '#0066f5',
        'bluetiful-light': '#dbeafe',
        'royal-dark-blue': '#022b69',
        'capri': '#5ac8fb',
        'capri-light': '#F3F7FA',
        'alice-blue': '#f4f8fc',
        'red': '#FF0000',
        'grey': '#fbfbfb',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['even'],
    },
  },
  plugins: [],
}
