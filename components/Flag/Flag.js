import styles from './Flag.module.scss'

const Flag = ({ english, isSingle }) => {
	return (
		<span className={`${styles.flag} ${!english ? styles.polish : ''}`}></span>
	)
}

export default Flag
