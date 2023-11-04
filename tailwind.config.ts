/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
				'gradient-radial':
					'linear-gradient(82deg, var(--tw-gradient-stops))',
			},
			colors: {
				primary: {
					DEFAULT: '#1E1E1E',
					light: '#2E2E2E',
					dark: '#141414',
				},
				text: {
					DEFAULT: '#000000',
					light: '#fff',
					dark: '#fff',
				},
				
				background: {	
					DEFAULT: '#19191a',
					light: '#fff',
					dark: '#19191a',
				},
				warning: {
					DEFAULT: '#FF9800',
					light: '#FFB74D',
					dark: '#F57C00',
				},

				pallette: {
					'orange': '#FF5722',
          'orange-red': '#ff4b28',
				},
			},
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}