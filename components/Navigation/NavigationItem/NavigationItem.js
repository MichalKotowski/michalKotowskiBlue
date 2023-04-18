import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './NavigationItem.module.scss'

const NavigationItem = ({ path, icon, label }) => {
	const currentPath = usePathname()

	return (
		<Link
			href={path}
			className={`${styles.navigationItem} ${
				currentPath === path ? styles.active : ''
			}`}
		>
			<span className={styles[icon]}></span>
			<p>{label}</p>
		</Link>
	)
}

export default NavigationItem
