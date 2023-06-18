import Watch from '@components/Navigation/Watch'
import NavigationItem from '@components/Navigation/NavigationItem'
import SocialButton from './SocialIcon/SocialButton'
import { useState } from 'react'
import styles from './Navigation.module.scss'

const Navigation = () => {
	const [isToggled, setIsToggled] = useState(false)

	return (
		<nav className={styles.navigationWrapper}>
			<Watch />
			<div className={styles.navigation}>
				<NavigationItem path="/" icon="home" label="Home" />
				<NavigationItem path="/writings" icon="writings" label="Writings" />
				<NavigationItem path="/about" icon="about" label="About" />
			</div>
			<div className={styles.social}>
				<SocialButton href="https://github.com/MichalKotowski" icon="github" />
				<SocialButton
					href="https://www.goodreads.com/review/list/70574245-micha-kotowski?shelf=read"
					icon="goodreads"
				/>
				<SocialButton href="https://www.chess.com/member/ipisay" icon="chess" />
				<SocialButton href="mailto:hello@michalkotowski.pl" icon="email" />
			</div>
		</nav>
	)
}

export default Navigation
