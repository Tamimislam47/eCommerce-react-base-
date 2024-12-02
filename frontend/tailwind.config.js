/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        blue: "#266BF9",
      },
      colors: {
        blue: "#266BF9",
      },
      gridTemplateColumns: {
        autoFitCol: "repeat(auto-fit, minmax(300px, 1fr))", // Adjust `minmax` and `1fr` as needed
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{}],
  },
};
