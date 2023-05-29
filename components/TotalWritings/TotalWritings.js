import styles from './TotalWritings.module.scss'
import { useEffect, useState } from 'react'
import { getWritingsAmount } from '../../lib/api'

const TotalWritings = () => {
	const [amount, setAmount] = useState([])

	useEffect(() => {
		const getAmount = async () => {
			const writingsAmount = await getWritingsAmount(amount)

			setAmount(writingsAmount)
		}

		getAmount()
	}, [])

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
