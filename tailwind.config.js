/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        '300': '75rem',
        '325': '81.25rem'
      },
      colors: {
        dbg: '#f4f5f7',
        mbg: '#f5f9ff',
        success: '#24C366',
        success_5: '#b3e19d',
        failed: '#E65545',
        failed_5: '#fab6b6',
        warning: 'FF543A',
        imp: '222222',
        c33: '333333',
        c26: '262626',
        mid: '999999',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%'
      },
      fontFamily: {
        simHei: ['SimHei']
      },
      lineHeight: {
        11: '2.75rem'
      },
      fontSize: {
        // 可以自定义行高和文字大小如果默认的不好使
        s22: ['22px', '28px']
      },
      borderRadius: {
        lg: 'var(--radius)',
        md8: 'calc(var(--radius) - 2px)',
        md: 'calc(var(--radius) - 4px)',
        sm: 'calc(var(--radius) - 6px)',
        mini: 'calc(var(--radius) - 8px)'
      },
      boxShadow: {
        b: '0px 2px 8px 0px rgba(0,0,0,0.12)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    },
  },
  plugins: [],
};
