const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		remotePatterns: [{
				protocol: "https",
				hostname: "images.ctfassets.net",
			}],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `
			@use './tokens' as *;
			@use './mixins' as *;
		`,
	},
	env: {
		CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
		CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
		SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
		SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
		SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
	},
}
