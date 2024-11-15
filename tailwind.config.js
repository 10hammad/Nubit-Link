/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: '#669bbc',  // Main blue color
        brightBlue: '#1E3A8A', // Accent color for CTAs
        coolGray: '#FFFFFF',  // Background color for sections
        softYellow: '#E2F1E7', // Highlight color
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/background.jpg')", // Custom background image
      },
      // Custom animations for fade-in and slide-in effects
      animation: {
        'fade-in-down': 'fadeInDown 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards', // Add slide-up animation
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' }, // Start lower for a smoother slide effect
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
