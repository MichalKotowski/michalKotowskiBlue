const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
	// images: {
	// 	loader: 'custom',
	// },
	experimental: {
		appDir: true,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `@import "global.scss";`,
	},
	env: {
		CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
		CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
	},
}
