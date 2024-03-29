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
        projects: "clamp(3rem, 22vw, 15rem)",
        sitename: "clamp(1rem, 18px, 1.25rem)",
        titlesr: "clamp(.77rem, 75px, 6.66vw)",
        title: "clamp(1.2rem, 120px, 11vw)",
      },
      colors: {
        ecru: "#F3F4E8",
        dark: "#343434",
        darker: "#212121",
        watermelon: "#FC485A",
        persianblue: "#1541B3",
        goldenyellow: "#FBE10F",
        daisybush: "#4F2398",
        pearlaqua: "#8FD6B4",
        pink: "#FC6C85",
      },
      backgroundImage: {
        "hero-bg": "url('/bg-gradient.png')",
        aha: "url('/assets/aha/aha-header-bg.jpg')",
        hh: "url('/assets/fwgshh/fwgshh-header.jpg')",
        ibx: "url('/assets/ibx/ibx-header.jpg')",
        tb: "url('/assets/tollbrothers/tb-header-bg.jpg')",
        waln: "url('/assets/waln/pma-header.jpg')",
        fwgs: "url('/assets/fwgs/fwgs-header.jpg')",
      },
      transitionTimingFunction: {
        bezier: "cubic-bezier(0.7, 0, 0.2, 1)",
      },
      animation: {
        float: "float var(--cloud-timing) ease-in-out infinite",
        floatshadow: "floatshadow var(--cloud-timing) ease-in-out infinite",
        floatCircle:
          "floatCircle 40s linear infinite, floatFadein 2s 1s ease forwards",
        "icon-circle": "icon-circle 40s linear infinite",
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
          "0%": { opacity: "0.3" },
          "50%": { opacity: "0.15" },
          "100%": { opacity: "0.3" },
        },
        floatFadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        floatCircle: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "icon-circle": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
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
