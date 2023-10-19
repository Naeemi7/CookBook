/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        header: "#a9b6b6",
        footer: "#71757a",
        button: "#e3b905",
        background: "#e3ece2",
        cards: "#262f0d",
      },
    },
  },
  plugins: [],
};
