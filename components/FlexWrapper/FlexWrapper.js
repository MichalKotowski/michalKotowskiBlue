import styles from './FlexWrapper.module.scss'

const FlexWrapper = ({ children, type }) => {
	return (
		<div className={`${styles.heading} ${type ? styles[type] : ''}`}>
			{children}
		</div>
	)
}

export default FlexWrapper
