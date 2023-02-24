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
				"fade-in": "fade-in 5s ease-in-out forwards",
				title: "title 5s ease-out forwards",
				"fade-left": "fade-left 5s ease-in-out forwards",
				"fade-right": "fade-right 5s ease-in-out forwards",
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"75%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						opacity: "0%",

					},
				
					"75%": {
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"fade-right": {
					"0%": {
						opacity: "0%",
					},
				
					"75%": {
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"70%": {
						"line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						"line-height": "100%",
						"letter-spacing": "0em",

						opacity: "100%",
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
