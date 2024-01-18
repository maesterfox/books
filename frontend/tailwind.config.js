/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#3498db", // Change to your desired background color
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Use Poppins as the default font
      },
      textColor: {
        hover: "#2c3e50", // Text color on hover
      },
      extend: {
        boxShadow: {
          hover: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow on hover
        },
      },
    },
  },
  plugins: [],
};
