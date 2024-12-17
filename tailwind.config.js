/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
import tailwindAnimated from "tailwindcss-animated";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial"],
        anton: ["Anton", "sans-serif"],
        oswald: ["Oswald", "serif"],
      },
    },
  },
  plugins: [tailwindAnimated, flowbite.plugin(), require("daisyui")],
};
