import type { Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require("@designbycode/tailwindcss-text-stroke"),
        require("tailwindcss-animate")
    ],
} satisfies Config

