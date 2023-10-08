import styles from './ContentfulImage.module.scss'
import Image from 'next/image'

const ContentfulImage = (id, assets) => {
	const asset = assets?.find((asset) => asset.sys.id === id)
	const hasDescription = !!asset.description

	if (asset?.url) {
		return (
			<div
				className={`${styles.image} ${
					hasDescription ? styles.extended : styles.simple
				}`}
			>
				<Image
					src={asset.url}
					width={560}
					height={0}
					quality={100}
					alt={asset.title}
					style={{ height: 'auto' }}
				/>
				{hasDescription ? (
					<div className={styles.description}>
						<p>{asset.description}</p>
					</div>
				) : undefined}
			</div>
		)
	}

	return null
}

export default ContentfulImage
