/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "p-dark-cyan": "hsl(185, 75%, 39%)",
        "p-very-dark-desaturated-blue": "hsl(229, 23%, 23%)",
        "p-dark-grayish-blue": "hsl(227, 10%, 46%)",
        "n-dark-gray": "hsl(0, 0%, 59%)",
      },
      fontSize: {
        body: "18px", // name and stats
      },
      fontFamily: {
        "kumbh-sans": ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
