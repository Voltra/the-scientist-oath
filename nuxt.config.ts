import postcssConfig from "./postcss.config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	ssr: true,
	app: {
		head: {
			htmlAttrs: {
				lang: "en"
			},
			charset: "utf-8",
			viewport: "width=device-width, height=device-height, initial-scale=1, minimum-scale=0.1, maximum-scale=5, interactive-widget=resizes-content",
		}
	},
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/eslint-module",
		"@nuxtjs/stylelint-module",
		"@nuxt/content",
		"@nuxt/image",
		"@nuxtjs/fontaine",
		"nuxt-svgo",
		"@nuxtjs/sitemap",
		"nuxt-vite-legacy"
	],
	eslint: {
		fix: true,
		cache: true
		// failOnError: true
	},
	stylelint: {
		fix: true,
		cache: true
		// failOnError: true
	},
	postcss: postcssConfig,
	image: {
		image: {
			dir: "assets/img",
			provider: "ipxStatic",
			// The screen sizes predefined by `@nuxt/image`:
			screens: {
				xs: 320,
				sm: 404,
				md: 720,
				lg: 1024,
				xl: 1280,
				xxl: 1536,
				"2xl": 1536
			}
		}
	},
	svgo: {
		autoImportPath: "./assets/svg/"
	},
	legacy: {
		targets: ["defaults", "last 4 versions", ">=0.5%", "not dead"]
	}
});
