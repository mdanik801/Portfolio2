/** @type {import('tailwindcss').Config} */

export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            Acme: ["Acme", "sans-serif"],
            Nunito: ["Nunito Sans", " sans-serif"],
         },
         textShadow: {
            sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
            xl: "4px 4px 8px rgba(0, 0, 0, 0.5)",
            none: "none",
         },
      },
   },
   plugins: [
      function ({ addUtilities }) {
         const newUtilities = {
            ".text-shadow-sm": {
               textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            },
            ".text-shadow-md": {
               textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            },
            ".text-shadow-lg": {
               textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
            },
            ".text-shadow-xl": {
               textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
            },
            ".text-shadow-none": {
               textShadow: "none",
            },
            backdropBlur: {
               xs: "2px",
            },
         };
         addUtilities(newUtilities, ["responsive", "hover"]);
      },
   ],
};
