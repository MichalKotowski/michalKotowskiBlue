import styles from './Pill.module.scss'
import Link from 'next/link'

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

const Pill = ({ label, isBookmark }) => (
	<Link
		className={styles.pill}
		href={
			isBookmark ? `/bookmarks/tag/${slugify(label)}` : `/tag/${slugify(label)}`
		}
	>
		{label}
	</Link>
)

export default Pill
