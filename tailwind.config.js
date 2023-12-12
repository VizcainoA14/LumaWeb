/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    colors: {
      'primary': {
        DEFAULT: '#006686',
        dark: '#70d2ff',
      },
      'on-primary': {
        DEFAULT: '#ffffff',
        dark: '#003547',
      },
      'primary-container': {
        DEFAULT: '#c0e8ff',
        dark: '#004d66',
      },
      'on-primary-container': {
        DEFAULT: '#001e2b',
        dark: '#c0e8ff',
      },
      'secondary': {
        DEFAULT: '#4d616c',
        dark: '#b4cad6',
      },
      'on-secondary': {
        DEFAULT: '#ffffff',
        dark: '#1f333d',
      },
      'secondary-container': {
        DEFAULT: '#d0e6f3',
        dark: '#364954',
      },
      'on-secondary-container': {
        DEFAULT: '#091e27',
        dark: '#d0e6f3',
      },
      'background': {
        DEFAULT: '#fbfcfe',
        dark: '#191c1e',
      },
      'on-background': {
        DEFAULT: '#191c1e',
        dark: '#e1e2e5',
      },
      'surface': {
        DEFAULT: '#dce3e9',
        dark: '#40484c',
      },
      'on-surface': {
        DEFAULT: '#40484c',
        dark: '#c0c7cd',
      },
      'outline': {
        DEFAULT: '#71787d',
        dark: '#8a9297',
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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