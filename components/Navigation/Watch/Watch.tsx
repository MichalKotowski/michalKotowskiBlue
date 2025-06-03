'use client'

import { useEffect, useState } from 'react'
import styles from './Watch.module.scss'

const Watch = () => {
	const [time, setTime] = useState('')

	useEffect(() => {
		setTime(new Date().toLocaleTimeString())
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString())
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className={styles.watch}>
			<span>女児</span>
			{time}
		</div>
	)
}

export default Watch
