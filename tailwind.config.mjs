/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        lila: "#6466E9",
        grayOne: "#20293A",
        grayTwo: "#4A5567",
        grayThree: "#97A3B6",
      },
    },
  },
  plugins: [],
};
