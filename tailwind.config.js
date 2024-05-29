/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter), sans-serif"],
        roboto: ["var(--font-roboto), sans-serif"],
      },
    },
  },
  plugins: [],
};
