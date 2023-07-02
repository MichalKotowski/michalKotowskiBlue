import styles from './Content.module.scss'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const Content = ({ children }) => {
	const pathname = usePathname()
	const [animation, setAnimation] = useState(false)

	useEffect(() => {
		setAnimation(true)

		setTimeout(() => setAnimation(false), 500)
	}, [pathname])
	return (
		<div className={`${styles.content} ${animation ? styles.animation : ''}`}>
			{children}
		</div>
	)
}

export default Content
