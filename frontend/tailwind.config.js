import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// Extend the Tailwind color palette to match the theme
				background: 'hsl(220, 20%, 5%)', // Dark background
				foreground: 'hsl(0, 0%, 95%)',   // Light foreground
				card: 'hsl(220, 20%, 8%)',       // Slightly lighter than background for card elements
				accent: 'hsl(45, 100%, 50%)',    // Bright accent yellow
				border: 'hsl(220, 15%, 15%)',    // Darker for borders and outlines
				muted: 'hsl(220, 15%, 15%)',     // Muted colors
				ring: 'hsl(45, 100%, 50%)',      // Accent color for ring effects
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'], // Apply 'Poppins' font family
			},
			borderRadius: {
				DEFAULT: '0.25rem', // Base radius for consistent design
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				sunflower: {
					primary: "hsl(45, 100%, 50%)", // Bright yellow accent
					secondary: "hsl(220, 15%, 15%)", // Dark secondary (for darker backgrounds)
					accent: "hsl(45, 100%, 50%)", // Bright yellow for accents
					neutral: "hsl(220, 20%, 8%)", // Dark neutral (card elements)
					"base-100": "hsl(220, 20%, 5%)", // Very dark background
					info: "hsl(220, 10%, 20%)", // Info color - dark grey
					success: "#85BB65", // Success green remains the same
					warning: "#F0C808", // Bright golden yellow for warnings
					error: "#E25822", // Burnt orange for errors
					"primary-foreground": "hsl(220, 10%, 20%)", // Dark foreground
					"secondary-foreground": "hsl(0, 0%, 95%)", // Light foreground for text
				},
			},
		],
	},
};
