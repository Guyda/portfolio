const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['"Caveat"', ...defaultTheme.fontFamily.serif],
        titan: ['"Titan One"', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        "18xl": "clamp(80px, 18vw, 240px)",
        "25xl": "clamp(120px, 25vw, 360px)",
      },
      colors: {
        tomato: "#e7524c",
        cream: "#fffade",
        dark: "#343434",
      },
      animation: {
        float: "float var(--cloud-timing) ease-in-out infinite",
        floatshadow: "floatshadow var(--cloud-timing) ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(40px) rotate(5deg)" },
          "50%": { transform: "translateY(0px) rotate(-5deg)" },
          "100%": { transform: "translateY(40px) rotate(5deg)" },
        },
        floatshadow: {
          "0%": { opacity: "0.45" },
          "50%": { opacity: "0.2" },
          "100%": { opacity: "0.45" },
        },
      },
    },
  },
  plugins: [],
};
