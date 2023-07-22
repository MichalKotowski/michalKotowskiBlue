import styles from './TotalWritings.module.scss'

const TotalWritings = ({ type, amount }) => {
	const alignString = (type) => {
		if (amount > 1) {
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
