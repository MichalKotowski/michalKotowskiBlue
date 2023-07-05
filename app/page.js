import heroImage from '@assets/images/homepage.jpg'
import Writings from '@components/Writings'
import Spacer from '@components/Spacer'
import Image from 'next/image'
import Link from 'next/link'
import { getWritings } from '../lib/api'

export const metadata = {
	title: 'Home | Michał Kotowski',
	description:
		"I'm Michał Kotowski, a web developer from Warsaw with experience in design and brand identity.",
	robots: {
		index: false,
		follow: false,
		googleBot: {
			index: false,
			follow: false,
			noimageindex: false,
		},
	},
}

const Page = async () => {
	const data = await getWritings(3)

	if (!data) {
		return <p>Loading...</p>
	}

	return (
		<>
			<Image
				quality={100}
				src={heroImage}
				alt="Picture of the author - Michal Kotowski"
			/>
			<Spacer size="large" />
			<h1>
				Welcome! I&apos;m <Link href="/about">Michał Kotowski</Link>, a web
				developer from Warsaw with experience in design and brand identity.
			</h1>
			<Spacer size="medium" />
			<p>
				I treat this website as my personal playground where I can tinker, learn
				new things and <Link href="/writings">share my knowledge</Link>. While
				the dopamine rush of solving problems plays the main role here, this
				site serves as a medium in which I can give advice through writing -
				mostly to myself. 😅
			</p>
			<Spacer size="huge" />
			<Writings displayHeading={true} data={data} />
		</>
	)
}

export default Page
