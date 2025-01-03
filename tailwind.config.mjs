/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "san-serif"],
    },
    extend: {
      colors: {
        "background": "#080904",
        "text": "#EDEFE9"
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: {
              sans: ["Inter", "sans-serif"]
            },
            color: "#EDEFE9",
            h1: {
              color: "#edefe9"
            },
            h2: {
              color: "#edefe9"
            },
            h3: {
              color: "#edefe9"
            },


          }
      }
    }
  }
  }
};
