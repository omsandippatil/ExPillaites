import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				sunflower: {
					primary: "#FFDA03", // Bright Sunflower Yellow
					secondary: "#FFF5B7", // Soft Pale Yellow
					accent: "#3A7D44", // Leafy Green (for accents)
					neutral: "#4B3F30", // Dark Brown (for text, similar to sunflower seeds)
					"base-100": "#FDF6E3", // Light Cream (background, like sunflower petals)
					info: "#000000", // Golden Yellow (for informational elements)
					success: "#85BB65", // Green (representing growth and success)
					warning: "#F0C808", // Bright Golden Yellow (for warnings)
					error: "#E25822", // Burnt Orange (for errors)
				},
			},
		],
	},
};
