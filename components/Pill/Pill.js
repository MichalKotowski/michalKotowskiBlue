'use client'

import styles from './Pill.module.scss'
import Link from 'next/link'
import { useAnimationOnNavigate } from '@hooks/useAnimationOnNavigate'

const slugify = (text) => {
	return text
		.toString() // Cast to string (optional)
		.normalize('NFKD') // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
		.toLowerCase() // Convert the string to lowercase letters
		.trim() // Remove whitespace from both sides of a string (optional)
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\_/g, '-') // Replace _ with -
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/\-$/g, '') // Remove trailing -
}

const Pill = ({ label, isBookmark = false }) => {
	const href = isBookmark
		? `/bookmarks/tag/${slugify(label)}`
		: `/tag/${slugify(label)}`
	const onNavigate = useAnimationOnNavigate()

	return (
		<Link
			className={styles.pill}
			href={href}
			onNavigate={(event) => onNavigate(event, href)}
		>
			{label}
		</Link>
	)
}

export default Pill
