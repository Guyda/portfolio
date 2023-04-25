const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['"Lexend"', ...defaultTheme.fontFamily.sans],
        zilla: ['"Zilla Slab"', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        "18xl": "clamp(80px, 18vw, 200px)",
        "25xl": "clamp(120px, 25vw, 360px)",
        projects: "clamp(3rem, 18vw, 12rem)",
        sitename: "clamp(1rem, 18px, 1.25rem)",
        titlesr: "clamp(.77rem, 77px, 7vw)",
        title: "clamp(1.2rem, 120px, 11vw)",
      },
      colors: {
        tomato: "#e7524c",
        cream: "#fffade",
        ecru: "#F3F4E8",
        watermelon: "#FC485A",
        persianblue: "#1541B3",
        goldenyellow: "#FBE10F",
        dark: "#343434",
      },
      transitionTimingFunction: {
        bezier: "cubic-bezier(0.7, 0, 0.2, 1)",
      },
      animation: {
        float: "float var(--cloud-timing) ease-in-out infinite",
        floatshadow: "floatshadow var(--cloud-timing) ease-in-out infinite",
        ticker: "ticker 8s infinite",
        scrollerDot1: "scrollerDot1 1s ease-out infinite;",
        scrollerDot2: "scrollerDot2 1s ease-out infinite;",
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
        ticker: {
          "15%": { transform: "translateY(-20%)" },
          "25%": { transform: "translateY(-20%)" },
          "40%": { transform: "translateY(-40%)" },
          "50%": { transform: "translateY(-40%)" },
          "65%": { transform: "translateY(-60%)" },
          "75%": { transform: "translateY(-60%)" },
          "90%": { transform: "translateY(-80%)" },
          "100%": { transform: "translateY(-80%)" },
        },
        scrollerDot1: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "65%": { opacity: 1, transform: "translateY(20%)" },
          "100%": { opacity: 0, transform: "translateY(20%)" },
        },
        scrollerDot2: {
          "0%": { opacity: 0 },
          "85%": { opacity: 1 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
