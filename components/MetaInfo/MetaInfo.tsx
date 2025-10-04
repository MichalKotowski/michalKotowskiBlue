import { ReactNode } from 'react'
import styles from './MetaInfo.module.scss'

interface MetaInfoProps {
	label: string
	value?: string
	children?: ReactNode
}

const MetaInfo = ({ label, value, children }: MetaInfoProps) => {
	return (
		<div className={styles.metaInfo}>
			<p className={styles.label}>{label}</p>
			<div className={styles.separator}></div>
			{value && <p className={styles.value}>{value}</p>}
			{children && <div className={styles.children}>{children}</div>}
		</div>
	)
}

export default MetaInfo
