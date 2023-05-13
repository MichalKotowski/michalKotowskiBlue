'use client'

import Button from '@components/Button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getWritings } from '../../lib/api'
import styles from './Writings.module.scss'

const Writings = ({ displayHeading, amount = 3 }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		const getData = async () => {
			const data = await getWritings()

			setData(data)
			console.log(data)
		}

		getData()
	}, [])
	console.log(data)
	return (
		<div className={styles.writings}>
			{displayHeading === true && (
				<div className={styles.heading}>
					<h2>Latest writings</h2>
					<Button type="tertiary" label="View all" path="/writings" />
				</div>
			)}
			<div className={styles.list}></div>
		</div>
	)
}

export default Writings
