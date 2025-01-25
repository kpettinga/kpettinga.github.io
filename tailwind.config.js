/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter','-apple-system','BlinkMacSystemFont','"Segoe UI"','"Helvetica Neue"','Arial','sans-serif'],
      mono: ['"JetBrains Mono"', 'monospace'],
    },
    extend: {
      animation: {
        blink: 'blink 0.75s step-start infinite',
      },
      colors: {
        mint: {
          50:  "#F2FFF8",  // Softer mint hue
          100: "#DFFFEF",  // Gentle mint green
          200: "#BFFFE0",  // Light mint
          300: "#A3FFD4",  // Fresh mint
          400: "#8AFFC7",  // Base mint tone
          500: "#6EE5AF",  // Slightly deeper green mint
          600: "#58C79A",  // Balanced minty green
          700: "#44A27E",  // Cooler midtone
          800: "#348468",  // Deep mint
          900: "#246149",  // Dark mint
          950: "#133927",  // Almost black-green mint
        },
        midnight: {
          50: '#EAEAF2', 
          100: '#CACAE4',
          200: '#A7A7D3',
          300: '#8484C1',
          400: '#6363AF',
          500: '#4F4F96',
          600: '#45457E',
          700: '#3E3E75',
          800: '#38386B',
          900: '#2D2D56'
        }
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'snappy': 'cubic-bezier(.95,0,.45,1)',
      }
    },
  },
  plugins: [],
}

