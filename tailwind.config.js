/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jura: ["Jura", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        babas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4E99A4",
          secondary: "#98c5f9",
          accent: "#4C696D",
          neutral: "#000000",
          "base-100": "#FFFFFF",
          info: "#DDF8F3",
          success: "#4DEADD",
          warning: "#B08611",
          error: "#F24A82",
        },
      },
    ],
  },
};
