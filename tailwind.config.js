/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins', 'system-ui', 'sans-serif'],
        bison: ['Bison', 'system-ui', 'sans-serif'],
        roboto: ['Roboto', 'system-ui', 'sans-serif'],
        jost: ['Jost', 'system-ui', 'sans-serif'],
      },
      textColor: {
        custom: '#FB491D',
        gray: '#696969',
        sblack: '#1F1F1F',
        grey: '#333333',
        vector: '#232323',
        


      },
      lineHeight: {
        '16.23': '16.23',
        '18.75': '18.75',
        '20.23': '20.23px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '16.23': '16.23px',
        '33': '33px',
        '42': '42px',
        '72': '72px',
        '80': '80px',
      },
      fontWeight: {
        '300': 300,
        '400':400,
        '500':500,
        '700':700

      },

      fontSize: {
        '13.85': '13.85',
        '14': '14px',
        '16': '16px',
        '26': '26px',
        '30': '30px',
        '42': '42px',
        '46':'46px',
        '50': '50px',
        '60': '60px',
        '80': '80px',
      },

      backgroundColor: {
        custom: '#FB491D',
      },

      width: {
        '42': '42',
        '175': '175px',
        '226': '226px',
        '315': '315px',
        '350': '350px',
        '430': '430px',
        '1383': '1383px',

      },
      height: {
        '42': '42',
        '50': '50px',
        '52': '52px',
        '126': '126px',
        '216': '216px',
        '416': '416px',
        '1038': '1038px',
      },
      inset: {
        '42': '42px',
        '345': '345px',
      },
      boxShadow: {
        'custom': '2px 2px 6px 0 rgba(0, 0, 0, 0.09)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
