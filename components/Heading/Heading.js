import styles from './Heading.module.scss'
import { Flag } from '@components/Flag'

const Heading = ({ children }) => {
	return <div className={styles.heading}>{children}</div>
}

export default Heading
