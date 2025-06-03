'use client'

import Button from '@components/Button'
import Pill from '@components/Pill'
import Flag from '@components/Flag'
import Link from 'next/link'
import { toRomanDate } from '../../lib/utilities'
import styles from './Writings.module.scss'
import { useAnimationOnNavigate } from '@hooks/useAnimationOnNavigate'
import { Writing } from '../../types/content'

interface Writings {
	displayHeading?: boolean,
	showTags?: boolean,
	data: Writing[],
}

const Writings = ({ displayHeading = false, showTags = false, data }: Writings) => {
	const onNavigate = useAnimationOnNavigate()

	return (
		<div className={styles.writings}>
			{displayHeading && (
				<div className={styles.heading}>
					<h2>Latest writings</h2>
					<Button type="tertiary" label="View all" path="/writings" />
				</div>
			)}
			<div className={styles.list}>
				{data.map((writing: Writing) => (
					<div key={writing.slug} className={styles.writing}>
						<div className={styles.rectangle}></div>
						<div className={styles.content}>
							<div className={styles.languageAndDate}>
								<Flag english={writing.english} />
								<p>{toRomanDate(writing.date)}</p>
							</div>
							<Link
								className={styles.title}
								href={`/writings/${writing.slug}`}
								onNavigate={(event) =>
									onNavigate(event, `/writings/${writing.slug}`)
								}
							>
								{writing.title}
							</Link>
							{showTags && writing.tags && (
								<div className={styles.tags}>
									{writing.tags.map((tag) => (
										<Pill key={tag} label={tag.replaceAll('-', ' ')} />
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
