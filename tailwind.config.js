/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  safelist: [{
    pattern: /hljs+/,
  }],
  theme: {
    hljs: {
      theme: 'night-owl',
    },
    extend: {
      typography: ({ theme }) => ({
        'main-purple': {
          css: {
            '--tw-prose-links': theme('colors.main-purple'),
            '--tw-prose-code': theme('colors.main-purple'),

            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },

            "pre": {
              padding: "0"
            },

            "pre code": {
              padding: "1rem 1.25rem" 
            },
          }
        },
      }),

      screens: {
        'max-xl': { "max": '1220px' },
        'semi-xl': { "max": '1000px' },
        'max-lg': {"max": '920px'},
        'md': { "max": '680px' },
        '2sm': { "max": '460px' },
        '3sm': { "max": '400px' },
        'xl': '1221px',
        'lg': "921px",
        'bigger-md': "681px",
        'smallest': '100px'
      },

      colors: {
        'soft-blue': '#DBF2FF',
        'bg-emphasis': "#B9D1DF",
        'custom-gray': '#B9B9B9',
        'soft-gray': '#e3e3e3',
        'normal-gray': "#585858",
        'soft-black': '#2a2a2a',
        'read-black': '#1a1a1a',
        'main-purple': '#2925EB',
        cyan: '#79FFE1',
      },
      width: {
        '30': "7.5rem"
      },
      
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        'double': '2rem',
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      fontFamily: {
        'sans-ui': ["Inter"],
        'sans-body': ["Open Sans"]
      },
      margin: {
        '4.5': "1.125rem"
      },

      gridTemplateColumns: {
        'main': '270px 875px'
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('tailwind-highlightjs')
  ],
}
