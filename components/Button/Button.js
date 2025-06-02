'use client'

import { useAnimationOnNavigate } from '@hooks/useAnimationOnNavigate'
import Link from 'next/link'
import styles from './Button.module.scss'

const Button = ({ type, label, path, target = undefined }) => {
	const onNavigate = useAnimationOnNavigate()

	return (
		<Link
			href={path}
			className={`${styles.button} ${styles[type]}`}
			target={target}
			onNavigate={(event) => onNavigate(event, path)}
		>
			{type === 'back' && (
				<div className={styles.icon}>
					<span></span>
				</div>
			)}
			{label}
			{type === 'tertiary' && (
				<div className={styles.icon}>
					<span></span>
				</div>
			)}
		</Link>
	)
}

export default Button
