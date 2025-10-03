'use client'

import styles from './Pill.module.scss'

interface PillProps {
	label: string
	isActive?: boolean
	onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Pill = ({ label, isActive = false, onClick }: PillProps) => {
	return (
		<div
			className={`${styles.pill} ${isActive ? styles.active : ''}  ${
				!onClick ? styles.unclickable : ''
			}`}
			onClick={onClick}
		>
			{label}
		</div>
	)
}

export default Pill
