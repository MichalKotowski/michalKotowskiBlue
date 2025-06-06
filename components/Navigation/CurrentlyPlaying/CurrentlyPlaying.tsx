import styles from './CurrentlyPlaying.module.scss'
import useSWR from 'swr'
import Marquee from 'react-fast-marquee'
import { useRef, useState, useEffect } from 'react'

async function fetcher(url: RequestInfo | URL) {
	return fetch(url).then((r) => r.json())
}

const CurrentlyPlaying = () => {
	const [isOverflow, setIsOverflow] = useState<boolean | undefined>(undefined)
	const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined)

	const { data } = useSWR('/api/spotify/current', fetcher)
	const ref = useRef<any>(null)

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleWindowResize)

		const maxElementWidth = () => {
			if (windowWidth && windowWidth < 601) {
				return Number(windowWidth) - 62
			}

			if (windowWidth && windowWidth < 981) {
				return 538
			}

			return 238
		}

		setIsOverflow(ref.current?.offsetWidth > maxElementWidth())

		return () => {
			window.removeEventListener('resize', handleWindowResize)
		}
	}, [ref, data, windowWidth])

	if (!data || !data.isPlaying) {
		return (
			<div className={`${styles.currentlyPlaying} ${styles.align}`}>
				<div className={styles.spotify}></div>
				<div className={styles.text}>
					<p>Spotify playback is idle</p>
				</div>
			</div>
		)
	}

	return (
		<>
			<p className={styles.hiddenText} ref={ref}>
				<strong>{data.title}</strong> by <strong>{data.artist}</strong>
			</p>
			<div className={styles.currentlyPlaying}>
				<div className={styles.icon}>
					<span />
					<span />
					<span />
				</div>
				<div className={styles.text}>
					{isOverflow ? (
						<Marquee
							pauseOnHover={true}
							gradient={windowWidth && windowWidth < 981 ? false : true}
							gradientColor={'rgb(5, 5, 7)'}
							gradientWidth={20}
							speed={30}
						>
							<a href={data.songUrl} target="_blank">
								<strong>{data.title}</strong> by{' '}
								<strong>
									{data.artist}
									<span>&nbsp;|&nbsp;</span>
								</strong>
							</a>
						</Marquee>
					) : (
						<a href={data.songUrl} target="_blank">
							<strong>{data.title}</strong> by <strong>{data.artist}</strong>
						</a>
					)}
				</div>
			</div>
		</>
	)
}

export default CurrentlyPlaying
