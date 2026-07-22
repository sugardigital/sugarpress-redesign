/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-red-500": "#952a58",
        "text-inverse": "#fff",
        "red-red-50": "#f4eaee",
        "text-muted": "#4e4c4d",
        "text-default": "#14151f",
        "neutral-700": "#d1d9e2",
        "neutral-900": "#7c8b9d",
        "neutral-9001": "#7c8b9d",
        "base-white": "#fff",
        "neutral-600": "#e6e9ec",
        "blue-500": "#437ef7",
      },
    },
    screens: {},
  },
  corePlugins: {
    preflight: false,
  },
};
