import styles from './FlexWrapper.module.scss'

const Heading = ({ children, type }) => {
	return (
		<div className={`${styles.heading} ${type ? styles[type] : ''}`}>
			{children}
		</div>
	)
}

export default Heading
