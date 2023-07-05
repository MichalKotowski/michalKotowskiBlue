import Link from 'next/link'
import styles from './Button.module.scss'

const Button = ({ type, label, path, target }) => {
	return (
		<Link
			href={path}
			className={`${styles.button} ${styles[type]}`}
			target={target}
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
