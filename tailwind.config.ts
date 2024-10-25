import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'text-indigo-600',
    'text-pink-600',
    'text-sky-600',
    'text-green-600',
    'text-orange-600',
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container
        padding: '1rem', // Add padding if needed
        screens: {
          '2xl': '1280px', // Custom smaller width for extra-large screens
        },
      },
    },
  },
  plugins: [daisyui, require('@tailwindcss/aspect-ratio'),],
  daisyui: {
    themes: [
      {
        pastel: {
          ...require("daisyui/src/theming/themes")["pastel"],
          "background-color": "#ffffff",
          "base-100": "#ffffff",
        }
      }
    ],
  }
};
export default config;