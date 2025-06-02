const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		// loader: 'imgix',
		// path: 'https://michalkotowski.pl/', // write you production link or localhost:3000 based on your env(for production, development, staging)
		domains: ['images.ctfassets.net'], // write domain which have assets
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
