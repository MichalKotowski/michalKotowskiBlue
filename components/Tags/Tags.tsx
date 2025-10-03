import MetaInfo from '@components/MetaInfo'
import { toRomanDate } from '../../lib/utilities'
import styles from './Tags.module.scss'
import Pill from '@components/Pill'

interface TagsProps {
	tags: string[]
	date: string
}

const Tags = ({ tags, date }: TagsProps) => {
	return (
		<div className={styles.tagsWrapper}>
			<div className={styles.tag}>
				<MetaInfo label="Date" value={toRomanDate(date)} />
			</div>
			<div className={styles.tag}>
				<MetaInfo label="Category">
					<div className={styles.tags}>
						{tags.map((category: string) => (
							<Pill key={category} label={category} />
						))}
					</div>
				</MetaInfo>
			</div>
		</div>
	)
}

export default Tags
