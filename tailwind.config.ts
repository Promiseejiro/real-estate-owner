/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)"],
      },
      height: {
        navbar: "70px",
        "full-no-navbar": "calc(100vh - 70px)",
      },
      colors: {
        primary: "#00B050",
        secondary: "#F5B800",
        darkPlus: "#17171B",
        dark: "#28282D",
        lightGreyPlus: "#F8F8FA",
        darkGray: "#888888",
        darkGray2: "#888888",
        lightGrey: "#D7D7E0",
        grey: "#9A9AA6",
        errorText: "#FD2121",
        errorBg: "#FFDFDF",
        notifyText: "#FF8112",
        darkGrey: "#4A4A4A",
        transparentDark: "rgba(0, 0, 0, 0.3)",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(280px, 1fr))",
        "fluid-2": "repeat(auto-fit, minmax(250px, 1fr))",
        "fluid-3": "repeat(auto-fit, minmax(200px, 1fr))",
        "fluid-4": "repeat(auto-fit, minmax(180px, 1fr))",
        "fluid-5": "repeat(auto-fit, minmax(160px, 1fr))",
      },
    },
  },
  plugins: [],
};
