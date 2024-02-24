import path from "node:path";

const here = (uri = "") => path.resolve(__dirname, uri);

const srcDir = here(".");

export default {
	mode: "jit",
	theme: {
		colors: {
			bg: "#0b1011",
			text: "#eaeaea",
			primary: {
				DEFAULT: "#1c95d6",
				50: "#f1f8fe",
				100: "#e2f1fc",
				200: "#bee3f9",
				300: "#85ccf4",
				400: "#45b2eb",
				500: "#1c95d6",
				600: "#0f79ba",
				700: "#0e6196",
				800: "#0f527d",
				900: "#134567",
				950: "#0c2c45"
			},
			secondary: {
				DEFAULT: "#1947ba",
				50: "#eef7ff",
				100: "#daecff",
				200: "#bddeff",
				300: "#8fcbff",
				400: "#5aacff",
				500: "#348afd",
				600: "#1d6bf3",
				700: "#1654df",
				800: "#1947ba",
				900: "#1a3e8e",
				950: "#152756"
			}
		}
	},
	plugins: [],
	content: [
		`${srcDir}/components/**/*.{vue,js,ts}`,
		`${srcDir}/layouts/**/*.vue`,
		`${srcDir}/pages/**/*.vue`,
		`${srcDir}/composables/**/*.{js,ts}`,
		`${srcDir}/plugins/**/*.{js,ts}`,
		`${srcDir}/utils/**/*.{js,ts}`,
		`${srcDir}/App.{js,ts,vue}`,
		`${srcDir}/app.{js,ts,vue}`,
		`${srcDir}/Error.{js,ts,vue}`,
		`${srcDir}/error.{js,ts,vue}`,
		`${srcDir}/app.config.{js,ts}`
	]
};
