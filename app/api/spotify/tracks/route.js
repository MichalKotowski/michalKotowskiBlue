import { getAccessToken } from '../../../../lib/utilities'

export async function GET() {
	try {
		const { access_token } = await getAccessToken()

		const response = await fetch(
			'https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term',
			{
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			}
		)

		const { items } = await response.json()

		const tracks = items.slice(0, 10).map((track) => ({
			title: track.name,
			artist: track.artists.map((_artist) => _artist.name).join(', '),
			url: track.external_urls.spotify,
			coverImage: track.album.images[1],
		}))

		return new Response(JSON.stringify({ tracks }), {
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
