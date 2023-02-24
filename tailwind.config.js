const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
				display: ["var(--font-pangea)"],
			},

			animation: {
				fade: "fade 3s ease-in-out",
				fadeSlow: "fade 7s ease-in-out",
			},
			keyframes: {
				fade: {
					from: {
						opacity: "0",
					},
					to: {
						opacity: "100",
					},
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/typography"),
		require("tailwindcss-debug-screens"),
	],
};
