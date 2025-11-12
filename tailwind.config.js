/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-11": "var(--grey-11)",
      },
      fontFamily: {
        "cv-web-role": "var(--cv-web-role-font-family)",
        "cv-web-section-title": "var(--cv-web-section-title-font-family)",
        "cv-web-title": "var(--cv-web-title-font-family)",
      },
    },
  },
  plugins: [],
};
