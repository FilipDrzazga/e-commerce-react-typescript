import("tailwindcss").Config;
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#1d1d1d",
      secondary: "#f1fcff",
    },
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
