import styles from './Content.module.scss'

const Content = ({ children }) => {
	return (
		<div className={styles.contentWrapper}>
			<div className={`${styles.content}`}>{children}</div>
		</div>
	)
}

export default Content
