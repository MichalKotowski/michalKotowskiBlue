import { getAccessToken } from '../../../../lib/utilities'

export async function GET() {
	try {
		const { access_token } = await getAccessToken()

		const response = await fetch(
			'https://api.spotify.com/v1/me/top/artists?limit=10&time_range=long_term',
			{
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			}
		)

		const { items } = await response.json()

		const artists = items.slice(0, 10).map((artist) => ({
			name: artist.name,
			url: artist.external_urls.spotify,
			coverImage: artist.images[1],
			followers: artist.followers.total,
		}))

		return new Response(JSON.stringify({ artists }), {
			status: 200,
			headers: {
				'content-type': 'application/json',
				'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200',
			},
		})
	} catch (error) {
		console.log('error inside get route', error)
		if (error instanceof Error) {
			return new Response(error.message, { status: 500 })
		}

		return new Response('Internal Server Error', { status: 500 })
	}
}
