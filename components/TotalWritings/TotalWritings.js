'use client'

import styles from './TotalWritings.module.scss'
import { useEffect, useState } from 'react'
import { getWritingsAmount } from '../../lib/api'

const TotalWritings = ({ tag }) => {
	const [amount, setAmount] = useState([])

	useEffect(() => {
		const getAmount = async () => {
			const writingsAmount = await getWritingsAmount(tag)

			setAmount(writingsAmount)
		}

		getAmount()
	}, [tag])

	return (
		<div className={styles.total}>
			<span></span>
			<p>
				<strong>{amount} articles</strong> available
			</p>
		</div>
	)
}

export default TotalWritings
