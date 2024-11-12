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
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{}],
  },
};
