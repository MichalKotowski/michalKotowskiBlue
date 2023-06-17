import styles from './Flag.module.scss'
import Link from 'next/link'

const Flag = ({ english }) => {
	return (
		<Link
			href={`/language/${english ? 'english' : 'polish'}`}
			className={`${styles.flag} ${!english ? styles.polish : ''}`}
		></Link>
	)
}

export default Flag
