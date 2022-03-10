// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const siteUrl = process.env.APP_URL || "http://localhost:8080";

module.exports = {
	siteUrl,
	siteName: "The Scientist's Oath",
	siteDescription: "The Oath to live by for Scientists all around the globe",
	plugins: [
		{
			use: "gridsome-plugin-service-worker",
			options: {
				networkFirst: {
					routes: ["/"],
					fileTypes: ["document", "script", "style", "image"]
				}
			}
		},
		{
			use: "gridsome-plugin-precompress",
			options: {
				extensions: ["css", "html", "js", "svg", "json"]
			}
		},
		{
			use: "gridsome-plugin-static-metadata",
			options: {
				image: `${siteUrl}/og.jpg`,
				themeColor: "#0b1011",
				lang: "en",
				locale: "en_US",
				robots: true
			}
		},
		{
			use: "gridsome-source-static-meta",
			options: {
				path: "./src/content/*.json"
			}
		},
		{
			use: "@gridsome/plugin-sitemap",
			options: {
				include: ["/", "/credits"]
			}
		}
	]
};
