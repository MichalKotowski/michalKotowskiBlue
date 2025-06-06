import { getAccessToken } from '../../../../lib/utilities'

export const revalidate = 30
export const dynamic = 'force-dynamic'

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
			return new Response(JSON.stringify({
				isPlaying: false
			}))
		}

		const song = await response.json()

		if (song.item === null) {
			return new Response(JSON.stringify({
				isPlaying: false
			}))
		}

		const isPlaying = song.is_playing
		const title = song.item.name
		const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
		const songUrl = song.item.external_urls.spotify

		return new Response(
			JSON.stringify({
				artist,
				isPlaying,
				songUrl,
				title,
			}),
			{
				status: 200,
				headers: {
					'content-type': 'application/json',
					'Cache-Control': 'public, s-maxage=30',
					'CDN-Cache-Control': 'public, s-maxage=30',
					'Vercel-CDN-Cache-Control': 'public, s-maxage=30',
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
