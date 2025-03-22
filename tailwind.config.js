/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0f172a',
        'bg-secondary': '#1e293b',
        'text-primary': '#f8fafc',
        'text-secondary': '#94a3b8',
        'accent': '#38bdf8',
        'accent-purple': '#818cf8',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(5%, 5%)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'float': 'float 15s infinite alternate ease-in-out',
        'float-reverse': 'float 12s infinite alternate-reverse ease-in-out',
        'blink': 'blink 1s infinite',
        'fade-in-1': 'fadeIn 0.5s ease forwards 0.2s',
        'fade-in-2': 'fadeIn 0.5s ease forwards 0.4s',
        'fade-in-3': 'fadeIn 0.5s ease forwards 0.6s',
        'fade-in-4': 'fadeIn 0.5s ease forwards 0.8s',
        'fade-in-5': 'fadeIn 0.5s ease forwards 1s',
        'fade-in-6': 'fadeIn 0.5s ease forwards 1.2s',
        'fade-in-7': 'fadeIn 0.5s ease forwards 1.4s',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(90deg, #38bdf8, #818cf8)',
      },
    },
  },
  plugins: [],
}
