import Watch from '@components/Navigation/Watch'
import NavigationItem from '@components/Navigation/NavigationItem'
import SocialButton from './SocialIcon/SocialButton'
import styles from './Navigation.module.scss'

const Navigation = () => {
	return (
		<nav className={styles.navigationWrapper}>
			<Watch />
			<div className={styles.navigation}>
				<NavigationItem path="/" icon="home" label="Home" />
				<NavigationItem path="/writings" icon="writings" label="Writings" />
				<NavigationItem path="/about" icon="about" label="About" />
			</div>
			<div className={styles.social}>
				<SocialButton href="https://test.com" icon="github" />
				<SocialButton href="https://test.com" icon="goodreads" />
				<SocialButton href="https://test.com" icon="chess" />
				<SocialButton href="https://test.com" icon="email" />
			</div>
		</nav>
	)
}

export default Navigation
