/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
import tailwindAnimated from "tailwindcss-animated";
import DaisyUI from "daisyui";

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
  plugins: [tailwindAnimated, flowbite.plugin(), DaisyUI],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
