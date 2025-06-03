import { SocialItem } from '../NavigationConstants'
import styles from './SocialIcon.module.scss'

const SocialButton = ({ href, icon }: SocialItem) => {
	return (
		<a href={href} className={styles.socialButton} target="_blank">
			<span className={styles[icon]}></span>
		</a>
	)
}

export default SocialButton
