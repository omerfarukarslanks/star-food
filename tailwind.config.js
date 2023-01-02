/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./apps/star-food/src/**/*.{html,ts}",
    "./libs/**/**/*.{html,ts}",
    "./libs/**/*.{html,ts}"],
  theme: {
    fontSize: {
      '17': ['clamp(0.688rem, 0.833vw, 1.063rem)', 'normal'],
      '18': ['clamp(0.75rem, 0.938vw, 1.125rem)', 'normal'],
      '22': ['clamp(0.75rem, 1.146vw, 1.25rem)', '1.5rem'],
      '23': ['clamp(0.75rem, 1.146vw, 1.438rem)', '1.5rem'],
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
      '10px': '10px',
      '12px': '12px',
      '15px': '10px',
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
        'silver': '#bfbfbf',
        'cultured-earl': '#f5f5f5',
        'sonic-silver': '#757373'
      },
      padding: {
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
        '43px': '2.688rem',
        '47px': '2.938rem',
        '103px': '6.438rem',
        '130px': '8.125rem',
        '50%': '50%',
      },
      margin: {
        '9px': '9px',
        '29px': '1.813rem',
        '43px': '2.688rem',
      },
      lineHeight: {
        '21px': '1.313'
      },
      width: {
        '95%': '95%',
        '94%': '94%',
        '69px': '4.313rem'
      }
    },
  },
  plugins: [],
}
