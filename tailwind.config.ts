import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#22207E",
        primaryGray: "#5D5D5D",
        headingBlack: "#212121",
        textBlack: "#6D6D6D",
        secondryPurple: "#ECF1FF",
        primarySkyBlue: "#EFF8FF",
        secondorySkyBlue: "#1B7495",
        grayBorder: "#D5E1EA",
        primaryGreen: "#33A359",
        secondryGreen: "#D3FFE2",

      },
    },
  },
  plugins: [],
} satisfies Config;
