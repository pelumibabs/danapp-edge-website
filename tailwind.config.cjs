/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Semantic surface tokens (respond to CSS theme variables)
        surface: {
          DEFAULT: 'var(--bg)',
          card: 'var(--bg-card)',
          elevated: 'var(--bg-elevated)',
          section: 'var(--bg-section)',
        },
        // Semantic content/text tokens
        content: {
          DEFAULT: 'var(--fg)',
          secondary: 'var(--fg-secondary)',
          muted: 'var(--fg-muted)',
        },
        // Brand — same in both themes
        brand: {
          purple: '#7C3AED',
          'purple-light': '#A78BFA',
          coral: '#F97316',
          'coral-light': '#FDBA74',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      screens: {
        xs: '390px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundSize: {
        grid: '77px 77px',
      },
    },
  },
  plugins: [],
}
