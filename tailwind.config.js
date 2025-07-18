/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          dark: '#0f172a',
          light: '#334155',
          lighter: '#475569',
          lightest: '#64748b',
          cadet: {
            dark: '#1e1e2d',
            light: '#2a2a3a',
          },
          transparent: 'rgba(15, 23, 42, 0.7)',
          lightOpaque: 'rgba(51, 65, 85, 0.8)',
        },
        neon: {
          blue: {
            DEFAULT: '#3b82f6',
            dark: '#2563eb',
            light: '#60a5fa',
            opaque: 'rgba(59, 130, 246, 0.3)',
          },
          green: '#22c55e',
          pink: '#ec4899',
          yellow: '#facc15'
        },
        text: {
          light: '#f1f5f9',
          muted: '#cbd5e1',
          dark: '#0f172a'
        },
        background: {
          primary: '#0f172a',
          secondary: '#1e293b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
        'space-grotesk': ['Space Grotesk', 'sans-serif']
      },
      borderRadius: {
        full: '9999px',
        xl: '12px',
        '2xl': '16px'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      boxShadow: {
        neon: '0 0 8px rgba(59, 130, 246, 0.6)',
        'neon-lg': '0 0 15px rgba(59, 130, 246, 0.8)',
        glow: '0 0 10px rgba(255, 255, 255, 0.2)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animated')
  ],
  corePlugins: {
    float: true,
    clear: true
  }
}
