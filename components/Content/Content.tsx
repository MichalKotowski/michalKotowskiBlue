import { JSX } from 'react'
import styles from './Content.module.scss'

interface Content {
	children: JSX.Element
}

const Content = ({ children }: Content) => {
	return (
		<div className={styles.contentWrapper}>
			<div className={`${styles.content}`}>{children}</div>
		</div>
	)
}

export default Content
