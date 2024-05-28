/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: ['router-link-active'],
  theme: {
      colors: {
      Noir: '#121212',
      Blanc: '#F9F9F9',
      AltBlanc: '#FCFCFC',
      Rose: '#F893A2',
      Violet: '#8B74C0',
      Cyan: '#3F9BBC',
      Rose50: 'rgba(248, 147, 162, 0.5)',
      Violet50: 'rgba(139, 116, 192, 0.5)',
      Cyan50: 'rgba(63, 155, 188, 0.5)',  
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      title: ['Montserrat', 'sans-serif'],
      firstTitle: ['Lobster', 'serif']
    },
    backgroundPosition: {
      'hero':'right 40% center',
    },
    boxShadow: {
      'circleshadow': 'inset 0px 0px 5px rgba(0, 0, 0, 0.25)',
      'searchshadow':  '0px 0px 10px rgba(0, 0, 0, 0.5)'
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'principal': 'repeat(12, 1fr)',
        '12': 'repeat(12, 1fr)',
        '11': 'repeat(11, 1fr)',
        '10': 'repeat(10, 1fr)',
        '9': 'repeat(9, 1fr)',
        '8': 'repeat(8, 1fr)',
        '7': 'repeat(7, 1fr)',
        '6': 'repeat(6, 1fr)',
        '5': 'repeat(5, 1fr)',
        '4': 'repeat(4, 1fr)',
        '3': 'repeat(3, 1fr)',
        '2': 'repeat(2, 1fr)',
        '1': 'repeat(1, 1fr)',
        'telprincipal':'repeat(12, 20px)',
        'tel12': 'repeat(12, 20px)',
        'tel11': 'repeat(11, 20px)',
        'tel10': 'repeat(10, 20px)',
        'tel9': 'repeat(9, 20px)',
        'tel8': 'repeat(8, 20px)',
        'tel7': 'repeat(7, 20px)',
        'tel6': 'repeat(6, 20px)',
        'tel5': 'repeat(5, 20px)',
        'tel4': 'repeat(4, 20px)',
        'tel3': 'repeat(3, 20px)',
        'tel2': 'repeat(2, 20px)',
        'tel1': 'repeat(1, 20px)',
      }
    },
  },
  plugins: [],
}

