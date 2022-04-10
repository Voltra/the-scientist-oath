// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const siteUrl = process.env.APP_URL || "http://localhost:8080";
const pathPrefix = process.env.PATH_PREFIX;
const siteName = "The Scientist's Oath";
const siteDescription = "The Oath to live by for Scientists all around the globe";
const icon = "./src/favicon.png";
const themeColor = "#0b1011";

module.exports = {
	siteUrl,
	pathPrefix,
	siteName,
	siteDescription,
	icon,
	plugins: [
		{
			use: "gridsome-plugin-seo",
		},
		{
			use: "gridsome-source-static-meta",
			options: {
				path: "./src/content/*.{json,yml}",
			},
		},
		{
			use: "@gridsome/plugin-sitemap",
			options: {
				include: ["/", "/credits", "/scientists", "/why"],
			},
		},
		{
			use: "gridsome-plugin-service-worker",
			options: {
				networkFirst: {
					cacheName: "nf",
					fileTypes: ["document", "script", "style", "image"],
				},
			},
		},
		{
			use: "gridsome-plugin-precompress",
			options: {
				extensions: ["css", "html", "js", "svg", "json"],
			},
		},
		{
			use: "gridsome-plugin-static-metadata",
			options: {
				themeColor,
				image: `${siteUrl}${pathPrefix}/og.jpg`,
				lang: "en",
				locale: "en_US",
				robots: true,
			},
		},
		{
			use: "gridsome-plugin-manifest",
			options: {
				background_color: themeColor,
				icon_path: icon,
				name: siteName,
				short_name: siteName,
				theme_color: themeColor,
				start_url: "/",
				lang: "en",
			},
		},
	],
};
