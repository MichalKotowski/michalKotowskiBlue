'use client'

import styles from './Flag.module.scss'
import Link from 'next/link'
import { useAnimationOnNavigate } from '@hooks/useAnimationOnNavigate'

interface Flag {
	english: boolean
}

const Flag = ({ english }: Flag) => {
	const href = `/language/${english ? 'english' : 'polish'}`
	const onNavigate = useAnimationOnNavigate()

	return (
		<Link
			href={`/language/${english ? 'english' : 'polish'}`}
			className={`${styles.flag} ${!english ? styles.polish : ''}`}
			onNavigate={(event) => onNavigate(event, href)}
		></Link>
	)
}

export default Flag
