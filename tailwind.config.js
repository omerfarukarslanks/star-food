/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./apps/star-food/src/**/*.{html,ts}",
    "./libs/**/**/*.{html,ts}",
    "./libs/**/*.{html,ts}"],
  theme: {
    fontSize: {
      '9': ['9px', 'normal'],
      '14': ['clamp(0.688rem, 0.729vw, 0.875rem)', 'normal'],
      '15': ['clamp(0.75rem, 0.781vw, 0.938rem)', 'normal'],
      '16': ['clamp(0.688rem, 0.833vw, 1rem)', 'normal'],
      '17': ['clamp(0.688rem, 0.833vw, 1.063rem)', 'normal'],
      '18': ['clamp(0.75rem, 0.938vw, 1.125rem)', 'normal'],
      '20': ['clamp(0.75rem, 1.042vw, 1.25rem)', '1.5rem'],
      '20-normal': ['clamp(0.75rem, 1.042vw, 1.25rem)', 'normal'],
      '22': ['clamp(0.75rem, 1.146vw, 1.25rem)', '1.5rem'],
      '23': ['clamp(0.75rem, 1.146vw, 1.438rem)', '1.5rem'],
      '25': ['clamp(0.75rem, 1.302vw, 1.563rem)', 'normal'],
      '30': ['clamp(0.938rem,1.563vw, 1.875rem)', 'normal'],
      '35': ['clamp(0.938rem,1.563vw, 2.188rem)', 'normal'],
    },
    borderWidth: {
      '0': '0',
      '0.5': '0.5px',
      '1': '1px',
      '1.5': '1.5px',
      '2': '2px'
    },
    fontFamily: {
      'sf-pro-display': ['SF Pro Display', 'sans-serif'],
    },
    borderRadius: {
      '3px': '3px',
      '4px': '4px',
      '5px': '5px',
      '20px': '20px',
      '10px': '10px',
      '12px': '12px',
      '15px': '10px',
      "50%": '50%',
      "0": "0"
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'min-lg': '1023px',
      // => @media (min-width: 1023px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'max-lg': '1025px',
      // => @media (min-width: 1025px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'maxXl': '1281px',
      // => @media (min-width: 1281px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '3xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '4xl': '1900px',
      // => @media (min-width: 1536px) { ... }
    },
    minWidth: {
      '98%': '98%',
      '99%': '99%',
      '97%': '97%',
      'auto': 'auto'
    },
    maxWidth: {
      '25%': '25%',
      '49%': '49%',
      '75%': '75%',
      '98%': '98%',
      '99%': '99%',
      '97%': '97%',
      'full': '100%',
      'auto': 'auto'
    },
    maxHeight: {
      '98%': '98%',
      '99%': '99%',
      '97%': '97%',
      'auto': 'auto'
    },
    minHeight: {
      '98%': '98%',
      '99%': '99%',
      '97%': '97%',
      'auto': 'auto'
    },
    extend: {
      colors: {
        'cultured': '#f6f6f6',
        'gainsboro': '#dadada',
        'philippine-silver': '#b4b4b5',
        'crayola': '#2A71FA',
        'bright-gray': '#EBEBEB',
        'platinum': '#E5E5E5',
        'chinese-silver': '#CCCCCC',
        'chinese-white': '#E0E0E0',
        'malachite': '#0DC74E',
        'brandeis-blue': '#0B69FF',
        'dark-gray-x11': '#AAAAAA',
        'sapphire': '#2d64a0',
        'silver': '#bfbfbf',
        'cultured-earl': '#f5f5f5',
        'lapis-lazuli': '#2d639f',
        'ghost-white': '#f5f6fe',
        'eton-blue': '#87bfad',
        'new-car': '#2457c3',
        'prussian-blue': '#003249',
        'gray-x11': '#b9b9b9',
        'anti-flash-white': '#f2f2f2',
        'american-silver': '#d1d1d1',
        'dark-silver-conf': '#707070',
        'dark-charcoal': '#ABABAB',
        'boston-university-red': '#CE0000',
        'toupe-gray': '#898989',
        'sonic-silver': '#757373',
        'light-silver': '#d9d9d9',
        'azure': '#0079ff',
        'permanent-geranium-lake': '#e53030',
        'silver-foil': '#afafaf',
        'spanish-gray': '#959595',
        'light-gray': '#d3d3d3',
        'water': '#dbecff',
        'philippine-gray': '#8b8b8b'
      },
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))',
        '2-0.7fr': 'repeat(2, minmax(0, 0.7fr))'
      },
      gap: {
        '30': '1.875rem',
        '177': '11.0625rem'
      },
      padding: {
        '9px': '0.563rem',
        '14px': '0.875rem',
        '15px': '0.938rem',
        '18px': '1.125rem',
        '22px': '1.375rem',
        '25px': '1.563rem',
        '26px': '1.625rem',
        '27px': '1.688rem',
        '29px': '1.813rem',
        '30px': '30px',
        '34px': '2.125rem',
        '37px': '2.313rem',
        '39px': '2.438rem',
        '41px': '2.563rem',
        '42px': '2.625rem',
        '43px': '2.688rem',
        '47px': '2.938rem',
        '51px': '3.188rem',
        '100px': '6.25rem',
        '103px': '6.438rem',
        '130px': '8.125rem',
        '50%': '50%',
        '18': '54px'
      },
      margin: {
        '9px': '9px',
        '25px': '25px',
        '27px': '1.688rem',
        '29px': '1.813rem',
        '43px': '2.688rem',
        '59px': '3.688rem',
        '88px': '88px',
        '18': '4.5rem',
        '104': '415px'
      },
      boxShadow: {
        'silver-halice-lg': '0 0 14px 0 rgba(173, 173, 173, 0.2);'
      },
      lineHeight: {
        '47px': '2.9655',
        '25px': '1.5625',
        '21px': '1.313'
      },
      width: {
        '98%': '98%',
        '99%': '99%',
        '97%': '97%',
        '95%': '95%',
        '94%': '94%',
        '70%': '70%',
        '69px': '4.313rem'
      }
    },
  },
  plugins: [],
}
