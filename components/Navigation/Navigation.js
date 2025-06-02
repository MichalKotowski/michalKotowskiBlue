import Watch from '@components/Navigation/Watch'
import NavigationItem from '@components/Navigation/NavigationItem'
import SocialButton from './SocialIcon/SocialButton'
import CurrentlyPlaying from './CurrentlyPlaying/CurrentlyPlaying'
import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Navigation.module.scss'
import { navigationItems, socialItems } from './NavigationConstants'
import { useAnimationOnNavigate } from '@hooks/useAnimationOnNavigate'

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false)
	const onNavigate = useAnimationOnNavigate()

	return (
		<div className={styles.navigationContainer}>
			<nav
				className={`${styles.navigationWrapper} ${
					isOpen ? styles.open : styles.closed
				}`}
			>
				<motion.div
					initial={{ opacity: 0, x: '-30px' }}
					animate={{ opacity: 1, x: '0px' }}
					transition={{
						type: 'spring',
						visualDuration: 0.3,
						bounce: 0.5,
					}}
				>
					<Watch />
					<CurrentlyPlaying />
					<div className={styles.navigation}>
						{navigationItems.map((navigationItem) => (
							<NavigationItem
								path={navigationItem.path}
								icon={navigationItem.icon}
								label={navigationItem.label}
								key={navigationItem.label}
								onNavigate={(event) => {
									setIsOpen(false)
									onNavigate(event, navigationItem.path)
								}}
							/>
						))}
					</div>
					<div className={styles.social}>
						{socialItems.map((socialItem) => (
							<SocialButton
								href={socialItem.href}
								icon={socialItem.icon}
								key={socialItem.icon}
							/>
						))}
					</div>
				</motion.div>
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
