'use client'

import Button from '@components/Button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getWritings } from '../../lib/api'
import { parseISO, format } from 'date-fns'
import { romanize } from 'romans'
import styles from './Writings.module.scss'

const Writings = ({ displayHeading = false, showTags = false, amount = 3 }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		const getData = async () => {
			const data = await getWritings(amount)

			setData(data)
		}

		getData()
	}, [amount])

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
								<span
									className={writing.english ? styles.english : styles.polish}
								></span>
								<p>
									{format(parseISO(writing.date), `dd `)}
									{romanize(parseISO(writing.date).getMonth() + 1)}
									{format(parseISO(writing.date), ` y`)}
								</p>
							</div>
							<Link className={styles.title} href={`/${writing.slug}`}>
								{writing.title}
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Writings
