import Writings from '@components/Writings'
import Spacer from '@components/Spacer'
import Link from 'next/link'
import HomeHeader from '@components/HomeHeader'
import { getWritings } from '../lib/api'

export const metadata = {
	title: 'Home | Michał Kotowski',
	description:
		"I'm Michał Kotowski, a web developer from Warsaw with experience in design and brand identity.",
}

const Page = async () => {
	const data = await getWritings(3)

	if (!data) {
		return <p>Loading...</p>
	}

	return (
		<>
			<HomeHeader />
			<p>
				Welcome to my personal playground, a space where I experiment, break
				things, and explore new ideas. I build this site for the thrill of
				solving coding challenges, but it also serves as a{' '}
				<Link href="/writings">knowledge hub</Link> for my future self. 😅
			</p>
			<Spacer size="huge" />
			<Writings displayHeading={true} data={data} />
		</>
	)
}

export default Page
