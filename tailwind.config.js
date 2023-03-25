/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BE123C',
        black: '#000000',
        white: '#FFFFFF',
        gray: '#9CA3AF',
        textBlack: '#111827'
      },
      
      fontSize: {
        'headline-1': [
          '48px',
          {
            lineHeight: '56px',
            letterSpacing: '0.015em',
            fontWeight: 700
          }
        ],
        'headline-2': [
          '36px',
          {
            lineHeight: '47px',
            letterSpacing: '0.015em',
            fontWeight: 700
          }
        ],
        'title-text': [
          '14px',
          {
            lineHeight: '18px',
            letterSpacing: '0.015em',
            fontWeight: 500
          }
        ],
        'sub-button': [
          '14px',
          {
            lineHeight: '24px',
            letterSpacing: '0.015em',
            fontWeight: 700
          }
        ]
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
