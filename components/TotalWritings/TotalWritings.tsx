import styles from './TotalWritings.module.scss'

interface TotalWritings {
	type: string
	amount: number | string
}

const TotalWritings = ({ type, amount }: TotalWritings) => {
	const alignString = (type: string) => {
		if (Number(amount) > 1) {
			return `${type}s`
		}

		return type
	}

	return (
		<div className={styles.total}>
			<span></span>
			<p>
				<strong>
					{amount} {alignString(type)}
				</strong>{' '}
				available
			</p>
		</div>
	)
}

export default TotalWritings
