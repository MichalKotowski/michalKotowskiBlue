import { JSX } from 'react'
import styles from './FlexWrapper.module.scss'

interface FlexWrapper {
	children: JSX.Element[]
	type?: string
}

const FlexWrapper = ({ children, type }: FlexWrapper) => {
	return (
		<div className={`${styles.heading} ${type ? styles[type] : ''}`}>
			{children}
		</div>
	)
}

export default FlexWrapper
