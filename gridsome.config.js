// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "The Scientist's Oath",
  siteDescription: "",
  siteUrl: process.env.APP_URL || "http://localhost:8080",
  plugins: [
	{
		use: "gridsome-plugin-service-worker",
		options: {
			networkFirst: {
				routes: ["/"],
				fileTypes: ["document", "script", "style", "image"],
			},
		},
	},
	{
		use: 'gridsome-plugin-precompress',
		options: {
			extensions: ['css', 'html', 'js', 'svg', 'json']
		}
	},
	{
		use: 'gridsome-plugin-static-metadata',
		options: {
		  image: '/meta.png',
		  themeColor: '#171c31',
		  lang: 'en',
		  locale: 'en_US',
		  robots: true,
		},
	  },
  ]
}
