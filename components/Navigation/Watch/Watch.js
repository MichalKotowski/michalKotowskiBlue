import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Watch.module.scss'

const variants = {
	hidden: { opacity: 0, x: '-30px' },
	visible: { opacity: 1, x: '0px' },
}

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

	// if (!time) {
	// 	return (
	// 		<div className={styles.watch}>
	// 			<span>女児</span>
	// 		</div>
	// 	)
	// }

	return (
		<motion.div
			className={styles.watch}
			variants={variants}
			animate={!time ? 'hidden' : 'visible'}
			transition={{
				type: 'spring',
				duration: 0.1,
				stiffness: 75,
			}}
			initial={false}
		>
			<span>女児</span>
			{time}
		</motion.div>
	)
}

export default Watch
