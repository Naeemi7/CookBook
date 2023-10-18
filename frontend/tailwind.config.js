/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        header: "#428612",
        footer: "#326414",
        button: "#bcd76d",
        background: "#e1edc1",
      },
    },
  },
  plugins: [],
};
