/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      listStyleType: {
        dash: "-",
      },
      fontFamily: {
        sans: ["Open Sans"],
        pap: ["Papyrus"],
        cur: ["Cursive"],
        ger: ["Georgia"],
        passion: ["Passion One"],
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        playfair: ["Playfair Display"],
        merriweather: ["Merriweather"],
        greatvibes: ["Great Vibes"],
        alexbrush: ["Alex Brush"],
        bigshoulders: ['"Big Shoulders Display"', "serif"],
      },
      colors: {
        pink: "#f00c93",
        cyan: "#00FFFF",
        yellow: "#ffc40c",
        primary_blue: "#0047AB",
        white: "#ffffff",
        milk: "#fafafa",
        grey: "#d3d3d3",
        blue: "#0284c7",
        secondary_blue: "#4F6BB2",
        black: "#000000",
        light_blue: "#239ddb",
        dark_blue: "#142850",
      },
      backgroundColor: {
        milk: "#fafafa",
        grey: "#d3d3d3",
        white: "#ffffff",
        blue: "#0284c7",
        secondary_blue: "#4F6BB2",
        primary_blue: "#0047AB",
        black: "#000000",
        cyan: "#acfffc",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
