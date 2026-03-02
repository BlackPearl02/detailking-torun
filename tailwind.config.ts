import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#d4af37',
          light: '#e5c65c',
          dark: '#b8962e',
        },
        accent: {
          DEFAULT: '#d4af37',
          light: '#e5c65c',
          dark: '#b8962e',
        },
        surface: {
          DEFAULT: '#0c0c0c',
          dark: '#080808',
        },
        panel: {
          DEFAULT: '#141414',
          light: '#1a1a1a',
          border: '#2a2a2a',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        logo: ['var(--font-logo)', 'cursive'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(0,0,0,0.35)',
        'soft-lg': '0 8px 40px rgba(0,0,0,0.45)',
        'card': '0 2px 12px rgba(0,0,0,0.2)',
        'glow': '0 0 32px rgba(212,175,55,0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
