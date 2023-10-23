const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		// loader: 'imgix',
		// path: 'https://michalkotowski.pl/', // write you production link or localhost:3000 based on your env(for production, development, staging)
		domains: ['images.ctfassets.net'], // write domain which have assets
	},
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
		SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
		SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
		SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
	},
	headers: () => [
		{
			source: '/api/spotify/current',
			headers: [
				{
					key: 'Cache-Control',
					value: 'no-store',
				},
			],
		},
	],
	async redirects() {
		return [
			{
				source: '/origins',
				destination: '/writings/origins',
				permanent: true,
			},
			{
				source: '/how-to-write-a-proper-jquery-function',
				destination: '/writings/how-to-write-scalable-jquery-functions',
				permanent: true,
			},
			{
				source: '/in-a-pursuit-of-personal-growth',
				destination: '/writings/in-pursuit-of-personal-growth',
				permanent: true,
			},
			{
				source: '/freestyle',
				destination: '/writings/freestyle',
				permanent: true,
			},
			{
				source: '/how-to-take-care-of-your-mental-health',
				destination: '/writings/how-to-take-care-of-your-mental-health',
				permanent: true,
			},
			{
				source: '/what-if-my-life-had-a-deadline',
				destination: '/writings/what-if-my-life-had-a-deadline',
				permanent: true,
			},
			{
				source:
					'/how-to-refresh-a-react-component-when-local-storage-has-changed',
				destination:
					'/writings/how-to-refresh-a-react-component-when-local-storage-has-changed',
				permanent: true,
			},
			{
				source: '/on-spring-vibes-and-parent-child-love',
				destination: '/writings/on-spring-vibes-and-parent-child-love',
				permanent: true,
			},
			{
				source: '/on-being-fulfilled',
				destination: '/writings/on-being-fulfilled',
				permanent: true,
			},
			{
				source: '/be-kind-to-yourself',
				destination: '/writings/be-kind-to-yourself',
				permanent: true,
			},
			{
				source: '/optymalizacja-zycia-jako-remedium-na-smuteczek',
				destination: '/writings/optymalizacja-zycia-jako-remedium-na-smuteczek',
				permanent: true,
			},
			{
				source: '/home',
				destination: '/',
				permanent: true,
			},
		]
	},
}
