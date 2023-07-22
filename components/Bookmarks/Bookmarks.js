import Button from '@components/Button'
import Pill from '@components/Pill'
import Flag from '@components/Flag'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'
import { romanize } from 'romans'
import styles from './Bookmarks.module.scss'

const Bookmarks = ({ data }) => {
	const extractDomain = (url) => {
		let hostname

		if (url.indexOf('www') > -1) {
			hostname = url.substring(url.indexOf('.') + 1)
		} else {
			hostname = url.substring(url.indexOf('/') + 2)
		}

		hostname = hostname.split('/')[0]
		return hostname
	}

	return (
		<div className={styles.writings}>
			<div className={styles.list}>
				{data.map((writing) => (
					<div key={writing.slug} className={styles.writing}>
						<div className={styles.rectangle}></div>
						<div className={styles.content}>
							<Link
								className={styles.title}
								href={writing.slug}
								target="_blank"
							>
								<span>{extractDomain(writing.slug)}</span>
								{writing.title}
							</Link>
							{writing.tags && (
								<div className={styles.tags}>
									{writing.tags.map((pill) => (
										<Pill
											key={pill}
											label={pill.replaceAll('-', ' ')}
											isBookmark
										/>
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

export default Bookmarks
