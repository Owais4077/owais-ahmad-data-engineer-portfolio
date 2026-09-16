import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#060913',
        card: {
          DEFAULT: 'rgba(13, 19, 34, 0.75)',
          hover: 'rgba(20, 29, 50, 0.85)',
          border: 'rgba(30, 41, 59, 0.8)',
        },
        primary: {
          50: '#ecfeff',
          100: '#cffaff',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4', // cyan-500
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        brand: {
          blue: '#3b82f6',
          cyan: '#06b6d4',
          teal: '#14b8a6',
          purple: '#8b5cf6',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'flow-line': 'flowLine 2s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        flowLine: {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config

