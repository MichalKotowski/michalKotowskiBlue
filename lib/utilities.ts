import { parseISO, format } from 'date-fns'
import { romanize } from 'romans'

export const toRomanDate = (date: string) => {
	return `${format(parseISO(date), `dd `)} 
  ${romanize(parseISO(date).getMonth() + 1)} 
  ${format(parseISO(date), ` y`)}`
}

export const getAccessToken = async () => {
	const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN || ''

	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			Authorization: `Basic ${Buffer.from(
				`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
			).toString('base64')}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token,
		}),
		cache: 'no-cache',
	})

	return response.json()
}
