import { useEffect, useState } from 'react'
import styles from './Watch.module.scss'

const Watch = () => {
	const [time, setTime] = useState(false)

	useEffect(() => {
		const timer = setInterval(() => {
			const date = new Date()
			const convertedTime = date.toLocaleTimeString()
			setTime(convertedTime)
		}, 1000)

		return () => clearInterval(timer)
	})

	if (!time) {
		return (
			<div className={styles.watch}>
				<span>女児</span>
			</div>
		)
	}

	return (
		<div className={styles.watch}>
			<span>女児</span>
			{time}
		</div>
	)
}

export default Watch
