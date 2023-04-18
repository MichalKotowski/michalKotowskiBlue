import { useEffect, useState } from 'react'
import styles from './Watch.module.scss'

const Watch = () => {
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => setDate(new Date()), 1000)

		return () => clearInterval(timer)
	})

	return (
		<div className={styles.watch} suppressHydrationWarning={true}>
			<span>女児</span>
			{date.toLocaleTimeString()}
		</div>
	)
}

export default Watch
