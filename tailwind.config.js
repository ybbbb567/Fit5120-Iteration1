/** @type {import('tailwindcss').Config} */


module.exports = {
  mode: "jit",
  content: [
  "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        green_300: "#7fb58b",
        black_900_7f: "#0000007f",
        deep_purple_900: "#3c2b83",
        red_303: "#f86c6c",
        red_700: "#e51c1c",
        red_300: "#f15f79",
        red_301: "#e06a6a",
        red_302: "#e66666",
        gray_50: "#fafafa",
        green_A700: "#25ea44",
        black_900: "#000000",
        deep_orange_300: "#fc945f",
        deep_orange_A700: "#ea1717",
        gray_903: "#310b0b",
        deep_orange_301: "#fc935c",
        purple_A100: "#d078fb",
        pink_400: "#c84e89",
        pink_100: "#f6aed5",
        pink_101: "#f5b0e1",
        gray_400: "#d3aeae",
        light_blue_50_7f: "#cfecff7f",
        black_900_e5: "#000000e5",
        orange_A200: "#ffa43c",
        gray_401: "#b9b8b8",
        bluegray_100_a2: "#d9d9d9a2",
        indigo_50: "#e0dfff",
        blue_500: "#18a0fb",
        gray_800: "#3b3b41",
        gray_900: "#090b37",
        bluegray_900: "#333333",
        bluegray_700: "#535857",
        black_900_19: "#00000019",
        white_A700: "#ffffff",
      },
      fontFamily: {
        spacegrotesk: "Space Grotesk",
        opensans: "Open Sans",
        montserrat: "Montserrat",
        dmsans: "DM Sans",
        sourcesanspro: "Source Sans Pro",
        hind: "Hind",
      },
      boxShadow: {
        bs1: "8px 8px  1px 0px #090b37",
        bs: "0px 4px  14px 0px #00000019",
      },
      backgroundImage: {
        gradient: "linear-gradient(134deg ,#fc945f,#f6aed5,#d078fb)",
        gradient1: "linear-gradient(90deg ,#c84e89,#f15f79)",
        gradient2: "linear-gradient(130deg ,#fc935c,#f5b0e1,#d078fb)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
