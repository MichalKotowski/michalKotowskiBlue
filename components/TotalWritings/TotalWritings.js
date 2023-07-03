import styles from './TotalWritings.module.scss'

const TotalWritings = ({ amount }) => {
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
