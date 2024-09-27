import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container
        padding: '1rem', // Add padding if needed
        screens: {
          sm: '100%',  // Full width for small screens
          md: '640px', // Smaller width for medium screens
          lg: '980px', // Custom smaller width for large screens
          xl: '1100px', // Custom smaller width for extra-large screens
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        pastel: {
          ...require("daisyui/src/theming/themes")["pastel"],
          "background-color": "#ffffff",
          "base-100": "#ffffff",
         
        }
      }
    ]
  }
};
export default config;
