/** @type {import('tailwindcss').Config} */
// Design tokens mirror the CSS custom properties declared in src/styles/index.css
// (:root). Keeping them here lets us drive the *new* mobile work entirely in
// Tailwind utilities while the legacy plain CSS stays untouched.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        depth: '#0d1b18',
        surface: '#152320',
        structure: '#1e2e2a',
        bronze: '#7c6247',
        'bronze-light': '#a07d5a',
        linen: '#e8e4dc',
        'warm-white': '#f4f1ec',
        white: '#f4f1ec',
        muted: '#6b7975',
        body: '#b8c2be',
      },
      borderColor: {
        DEFAULT: '#7c624726',
        soft: '#7c624726',
      },
      fontFamily: {
        display: ['NeueMachina', 'sans-serif'],
        ui: ['Satoshi', 'sans-serif'],
        sans: ['Satoshi', 'sans-serif'],
        mono: ['Satoshi', 'monospace'],
      },
      letterSpacing: {
        wide2: '0.15em',
        wide3: '0.2em',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
}
