/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#be123c",

          "secondary": "#6b7280",

          "accent": "#ea580c",

          "neutral": "#23282F",

          "base-100": "#212121",

          "info": "#0092D6",

          "success": "#15803d",

          "warning": "#facc15",

          "error": "#c026d3",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
