/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                custom: ["Roboto", "sans-serif"],
            },
            colors: {
                // Add a custom dark background color
                dark: "#1a1a1a", // You can choose any dark color you like
            },
        },
    },
    plugins: [],
};
