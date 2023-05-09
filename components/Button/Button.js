import Link from 'next/link'
import styles from './Button.module.scss'

const Button = ({ type, label, path }) => {
	return (
		<Link href={path} className={`${styles.button} ${styles[type]}`}>
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
