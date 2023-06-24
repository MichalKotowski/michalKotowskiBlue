import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './NavigationItem.module.scss'

const NavigationItem = ({ path, icon, label, onClick }) => {
	const currentPath = usePathname()

	return (
		<Link
			href={path}
			className={`${styles.navigationItem} ${
				currentPath === path ? styles.active : ''
			}`}
			onClick={onClick}
		>
			<span className={styles[icon]}></span>
			<p>{label}</p>
		</Link>
	)
}

export default NavigationItem
