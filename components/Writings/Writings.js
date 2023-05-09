import Button from '@components/Button'
import Link from 'next/link'
import {
	getAllWritingsWithSlug,
	getWritingAndMoreWritings,
} from '../../lib/api'
import styles from './Writings.module.scss'

const Writings = ({ displayHeading, amount }) => {
	return (
		<div className={styles.writings}>
			{displayHeading === true && (
				<div className={styles.heading}>
					<h2>Latest writings</h2>
					<Button type="tertiary" label="View all" path="/writings" />
				</div>
			)}
			<div className={styles.list}></div>
		</div>
	)
}

export default Writings

export async function getStaticProps({ params, preview = false }) {
	const data = await getWritingAndMoreWritings(params.slug, preview)

	return {
		props: {
			preview,
			writing: data?.writing ?? null,
			moreWritings: data?.moreWritings ?? null,
		},
	}
}

export async function getStaticPaths() {
	const allWritings = await getAllWritingsWithSlug()
	return {
		paths: allWritings?.map(({ slug }) => `/writings/${slug}`) ?? [],
		fallback: true,
	}
}
