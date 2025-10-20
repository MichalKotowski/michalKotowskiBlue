import styles from './CurrentlyPlaying.module.scss'
import useSWR from 'swr'
import Marquee from 'react-fast-marquee'
import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

async function fetcher(url: RequestInfo | URL) {
	return fetch(url).then((r) => r.json())
}

const CurrentlyPlaying = () => {
	const isFirstRenderRef = useRef<boolean>(true)
	const [isOverflow, setIsOverflow] = useState<boolean | undefined>(undefined)
	const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined)
	const [isPlaying, setIsPlaying] = useState<boolean>(false)

	const { data } = useSWR('/api/spotify/current', fetcher)

	useEffect(() => {
		isFirstRenderRef.current = false
	}, [])

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth)
		}

		// Set initial window width on mount
		handleWindowResize()
		// Add event listener for window resize
		window.addEventListener('resize', handleWindowResize)

		const maxElementWidth = () => {
			if (windowWidth && windowWidth < 601) {
				return Number(windowWidth) - 68
			}

			if (windowWidth && windowWidth < 981) {
				return 532
			}

			return 232
		}

		// Use a timeout to wait for the animation to finish before measuring
		const checkOverflow = () => {
			if (!data || !data.title || !data.artist) return false

			const text = `${data.title} by ${data.artist}` || ''
			// Estimate width using average character width
			const avgCharWidth = 7
			const estimatedWidth = text.length * avgCharWidth

			setIsOverflow(estimatedWidth > maxElementWidth())
		}

		// Wait for next paint after data changes or window resizes
		const timeoutId = setTimeout(checkOverflow, 100)

		return () => {
			window.removeEventListener('resize', handleWindowResize)
			clearTimeout(timeoutId)
		}
	}, [data, windowWidth, isPlaying])

	useEffect(() => {
		if (data && data.isPlaying) {
			setIsPlaying(true)
		} else {
			setIsPlaying(false)
		}
	}, [data])

	return (
		<AnimatePresence mode="wait">
			{!isPlaying ? (
				<motion.div
					className={`${styles.currentlyPlaying} ${styles.align}`}
					initial={
						isFirstRenderRef.current
							? { x: 0, opacity: 1 }
							: { x: -15, opacity: 0 }
					}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: 15, opacity: 0 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					key="not-playing"
				>
					<div className={styles.spotify}></div>
					<div className={styles.text}>
						<p>Spotify playback is idle</p>
					</div>
				</motion.div>
			) : (
				<>
					<motion.div
						initial={{ x: -15, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: 15, opacity: 0 }}
						transition={{ type: 'spring', stiffness: 300, damping: 30 }}
						key="playing"
					>
						<div className={styles.currentlyPlaying}>
							<div className={styles.iconWrapper}>
								<div className={styles.icon}>
									<span />
									<span />
									<span />
								</div>
							</div>
							<div className={styles.text}>
								{isOverflow ? (
									<Marquee
										pauseOnHover={true}
										gradient={windowWidth && windowWidth < 981 ? false : true}
										gradientColor={'rgb(5, 5, 7)'}
										gradientWidth={20}
										speed={30}
										autoFill={true}
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
										<strong>{data.title}</strong> by{' '}
										<strong>{data.artist}</strong>
									</a>
								)}
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}

export default CurrentlyPlaying
