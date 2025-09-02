'use client'

import styles from './Flag.module.scss'
import Link from 'next/link'
import { useAnimationOnNavigate } from '@hooks/useAnimationOnNavigate'
import { usePathname } from 'next/navigation'

interface Flag {
	english: boolean
}

const Flag = ({ english }: Flag) => {
	const href = `/language/${english ? 'english' : 'polish'}`
	const pathname = usePathname()
	const onNavigate = useAnimationOnNavigate()
	const isPathnameEqualToHref = pathname === href

	const onNavigateHandler = (event) => {
		if (!isPathnameEqualToHref) {
			onNavigate(event, href)
		}
	}

	return (
		<Link
			href={`/language/${english ? 'english' : 'polish'}`}
			className={`${styles.flag} ${!english ? styles.polish : ''} ${
				isPathnameEqualToHref ? styles.disabled : ''
			}`}
			onNavigate={(event) => onNavigateHandler(event)}
		></Link>
	)
}

export default Flag
