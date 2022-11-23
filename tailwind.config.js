module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    variants: {
        extend: {
            display: ["group-hover"],
        },
    },
    theme: {
        extend: {
            colors: {
                'primary': '#f05123'
            }
        },
    },
    plugins: [],
}