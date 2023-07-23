import Button from '@components/Button'
import Pill from '@components/Pill'
import Flag from '@components/Flag'
import Link from 'next/link'
import { toRomanDate } from '../../lib/utilities'
import styles from './Writings.module.scss'

const Writings = ({ displayHeading = false, showTags = false, data }) => {
	return (
		<div className={styles.writings}>
			{displayHeading && (
				<div className={styles.heading}>
					<h2>Latest writings</h2>
					<Button type="tertiary" label="View all" path="/writings" />
				</div>
			)}
			<div className={styles.list}>
				{data.map((writing) => (
					<div key={writing.slug} className={styles.writing}>
						<div className={styles.rectangle}></div>
						<div className={styles.content}>
							<div className={styles.languageAndDate}>
								<Flag english={writing.english} />
								<p>{toRomanDate(writing.date)}</p>
							</div>
							<Link className={styles.title} href={`/writings/${writing.slug}`}>
								{writing.title}
							</Link>
							{showTags && writing.tags && (
								<div className={styles.tags}>
									{writing.tags.map((pill) => (
										<Pill key={pill} label={pill.replaceAll('-', ' ')} />
									))}
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Writings
