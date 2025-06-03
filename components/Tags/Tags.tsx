import styles from './Tags.module.scss'
import Pill from '@components/Pill'

interface Tags {
	tags: string[]
}

const Tags = ({ tags }: Tags) => {
	return (
		<div className={styles.tags}>
			<p>Tags</p>
			<span></span>
			<div className={styles.tagsList}>
				{tags.map((tag: string) => (
					<Pill key={tag} label={tag.replaceAll('-', ' ')} />
				))}
			</div>
		</div>
	)
}

export default Tags
