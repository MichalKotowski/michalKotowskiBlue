import styles from './Spacer.module.scss'

const Spacer = ({ size }) => {
	return <div className={`${styles.spacer} ${styles[size]}`}></div>
}

export default Spacer
