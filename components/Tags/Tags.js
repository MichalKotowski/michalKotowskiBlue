import styles from './Tags.module.scss'
import Pill from '@components/Pill'

const Tags = ({ elements }) => {
	return (
		<div className={styles.tags}>
			<p>Tags</p>
			<span></span>
			<div className={styles.tagsList}>
				{elements.map((tag) => (
					<Pill key={tag} label={tag} />
				))}
			</div>
		</div>
	)
}

export default Tags
