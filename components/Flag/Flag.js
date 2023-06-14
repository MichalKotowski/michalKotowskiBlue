import styles from './Flag.module.scss'
import Link from 'next/Link'

const Flag = ({ english, isSingle }) => {
	return (
		<Link
			href="/tag/polish"
			className={`${styles.flag} ${!english ? styles.polish : ''}`}
		></Link>
	)
}

export default Flag
