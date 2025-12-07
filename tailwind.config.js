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
                background: "var(--background)",
                "background-soft": "var(--background-soft)",
                foreground: "var(--foreground)",
                muted: "var(--muted)",
                accent: "var(--accent)",
                "accent-soft": "var(--accent-soft)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                mono: ["var(--font-jetbrains-mono)", "monospace"],
            },
        },
    },
    plugins: [],
};