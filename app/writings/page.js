import TotalWritings from '@components/TotalWritings'
import Writings from '@components/Writings'
import Spacer from '@components/Spacer'
import { getWritings } from '../../lib/api'

export const metadata = {
	title: 'Writings | Michał Kotowski',
	description:
		'My name is Michal Kotowski. Whenever I have enough time on my hands, I like to share my thoughts on just about everything.',
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
	const data = await getWritings(100)

	if (!data) {
		return <p>Loading...</p>
	}

	return (
		<>
			<TotalWritings amount={data.length} />
			<Spacer />
			<h1>
				Whenever I have enough time on my hands, I like to share my thoughts on
				just about everything.
			</h1>
			<Spacer size="large" />
			<Writings showTags={true} data={data} />
		</>
	)
}

export default Page
