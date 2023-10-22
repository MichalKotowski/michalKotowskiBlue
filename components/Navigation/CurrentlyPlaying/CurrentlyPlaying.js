import styles from './CurrentlyPlaying.module.scss'
import useSWR from 'swr'
import Marquee from 'react-fast-marquee'
import { useRef, useState, useEffect } from 'react'

async function fetcher(url) {
	return fetch(url).then((r) => r.json())
}

const CurrentlyPlaying = () => {
	const { data } = useSWR('/api/spotify/current', fetcher)
	const ref = useRef(null)
	const [isOverflow, setIsOverflow] = useState(undefined)

	useEffect(() => {
		setIsOverflow(ref.current?.offsetWidth > 238)
	}, [ref, data])

	if (!data) {
		return null
	}

	if (!data.isPlaying) {
		return (
			<div className={`${styles.currentlyPlaying} ${styles.align}`}>
				<div className={styles.spotify}></div>
				<div className={styles.text}>
					<p>Nothing is being played</p>
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
							gradient={true}
							gradientColor={'rgb(5, 5, 7)'}
							gradientWidth={20}
							speed={30}
						>
							<a href={data.songUrl} target="_blank">
								<strong>{data.title}</strong> by{' '}
								<strong>{data.artist}&nbsp;|&nbsp;</strong>
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
