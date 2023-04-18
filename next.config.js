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
}
