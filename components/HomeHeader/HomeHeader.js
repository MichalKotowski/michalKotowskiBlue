import styles from './HomeHeader.module.scss'
import Image from 'next/image'
import kitkow from '@assets/images/kitkow.svg'
import Link from 'next/link'

const HomeHeader = ({ children }) => (
	<div className={styles.header}>
		<h1>
			Hey! I&apos;m <Link href="/about">Michał Kotowski</Link>, a software
			engineer from Warsaw with a background in design and brand identity.
		</h1>
		<Image
			quality={100}
			width={200}
			src={kitkow}
			alt="Sleeping cat"
			className={styles.cat}
		/>
	</div>
)

export default HomeHeader
