import styles from './Spacer.module.scss'

interface Spacer {
	size?: string
}

const Spacer = ({ size }: Spacer) => {
	return <div className={`${styles.spacer} ${size ? styles[size] : ''}`}></div>
}

export default Spacer
