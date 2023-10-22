import { getAccessToken } from '../../../../lib/utilities'

export async function GET() {
	try {
		const { access_token } = await getAccessToken()
		const response = await fetch(
			'https://api.spotify.com/v1/me/player/currently-playing',
			{
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			}
		)

		if (response.status === 204 || response.status > 400) {
			return Response.json({ isPlaying: false })
		}

		const song = await response.json()

		if (song.item === null) {
			return Response.json({ isPlaying: false })
		}

		const isPlaying = true
		const title = song.item.name
		const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
		const album = song.item.album.name
		const albumImageUrl = song.item.album.images[0].url
		const songUrl = song.item.external_urls.spotify

		return new Response(
			JSON.stringify({
				album,
				albumImageUrl,
				artist,
				isPlaying,
				songUrl,
				title,
			}),
			{
				status: 200,
				headers: {
					'content-type': 'application/json',
					'cache-control':
						'public, s-maxage=86400, stale-while-revalidate=43200',
				},
			}
		)
	} catch (error) {
		console.log('error inside get route', error)
		if (error instanceof Error) {
			return new Response(error.message, { status: 500 })
		}

		return new Response('Internal Server Error', { status: 500 })
	}
}
