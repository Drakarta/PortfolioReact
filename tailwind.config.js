/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
			primary: "#0f0f14",
			secondary: "#fff1e6",
			tetriary: "#575353",
		},
    fontFamily: {
			dancing: ['DancingScript-Bold', "sans-serif"],
			bespoke: ["BespokeSans-Regular", "sans-serif"],
			sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
		},
  },
  plugins: [],
}

