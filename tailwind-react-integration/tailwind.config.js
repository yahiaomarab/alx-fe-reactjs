/** @type {import('tailwindcss').Config} */
export default {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Remove unused styles
    darkMode: "media", // Can be "media" (system-based) or "class" (manual toggle)
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  