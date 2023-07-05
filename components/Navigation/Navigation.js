import Watch from '@components/Navigation/Watch'
import NavigationItem from '@components/Navigation/NavigationItem'
import SocialButton from './SocialIcon/SocialButton'
import { useState } from 'react'
import styles from './Navigation.module.scss'

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.navigationContainer}>
			<div></div>
			<nav
				className={`${styles.navigationWrapper} ${
					isOpen ? styles.open : styles.closed
				}`}
			>
				<Watch />
				<div className={styles.navigation}>
					<NavigationItem
						path="/"
						icon="home"
						label="Home"
						onClick={() => setIsOpen(false)}
					/>
					<NavigationItem
						path="/writings"
						icon="writings"
						label="Writings"
						onClick={() => setIsOpen(false)}
					/>
					<NavigationItem
						path="/about"
						icon="about"
						label="About"
						onClick={() => setIsOpen(false)}
					/>
				</div>
				<div className={styles.social}>
					<SocialButton
						href="https://github.com/MichalKotowski"
						icon="github"
					/>
					<SocialButton
						href="https://www.goodreads.com/review/list/70574245-micha-kotowski?shelf=read"
						icon="goodreads"
					/>
					<SocialButton
						href="https://www.chess.com/member/ipisay"
						icon="chess"
					/>
					<SocialButton href="mailto:hello@michalkotowski.pl" icon="email" />
				</div>
			</nav>
			<div
				className={`${styles.hamburger} ${
					isOpen ? styles.open : styles.closed
				}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span></span>
			</div>
			<div
				className={`${styles.overlay} ${isOpen ? styles.open : styles.closed}`}
				onClick={() => setIsOpen(false)}
			>
				<span></span>
			</div>
		</div>
	)
}

export default Navigation
