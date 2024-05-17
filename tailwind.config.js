/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-Red": "hsl(0, 78%, 62%)",
        "main-Cyan": "hsl(180, 62%, 55%)",
        "main-Orange": "hsl(34, 97%, 64%)",
        "main-Blue": "hsl(212, 86%, 64%)",
        "Very-Dark-Blue": "hsl(234, 12%, 34%)",
        "Grayish-Blue": "hsl(229, 6%, 66%)",
        "Very-Light-Gray": "hsl(0, 0%, 98%)",
      },
      spacing: {
        "mobile-container": "19.5rem",
        "mobile-card": "13.625rem",
        "mobile-h-max": "85rem",
        "desktop-w-card": "22.063rem",
        "desktop-h-card": "16rem",
      },
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
      },
      fontWeight: {
        "p-title": "275",
      },
    },
  },
  plugins: [],
};
