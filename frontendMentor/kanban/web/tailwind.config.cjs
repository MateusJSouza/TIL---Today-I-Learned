/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"main-purple": "#635FC7",
				"main-purple-hover": "#A8A4FF",
				black: "#000112",
				"very-dark-grey": "#20212C",
				"dark-grey": "#2B2C37",
				"lines-dark": "#3E3F4E",
				"medium-grey": "#828FA3",
				"lines-light": "#E4EBFA",
				"light-grey": "#F4F7FD",
				white: "#FFFFFF",
				"main-red": "#EA5555",
				"main-red-hover": "#FF9898",
			},
		},
	},
	plugins: [],
};
