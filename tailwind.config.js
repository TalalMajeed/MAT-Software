/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#3a73c1",
                    light: "#52ace4",
                },
                secondary: {
                    DEFAULT: "#52ace4",
                    dark: "#3a73c1",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-in-out",
                "slide-up": "slideUp 0.8s ease-out",
                "slide-down": "slideDown 0.8s ease-out",
                "slide-left": "slideLeft 0.8s ease-out",
                "slide-right": "slideRight 0.8s ease-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(50px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                slideDown: {
                    "0%": { transform: "translateY(-50px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                slideLeft: {
                    "0%": { transform: "translateX(50px)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                slideRight: {
                    "0%": { transform: "translateX(-50px)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};
