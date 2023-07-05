import TotalWritings from '@components/TotalWritings'
import Writings from '@components/Writings'
import Spacer from '@components/Spacer'
import Heading from '@components/Heading'
import { getWritingsByTag } from '../../../lib/api'

export async function generateMetadata({ params }) {
	return {
		title: `${params.slug.replaceAll('-', ' ')} | Michał Kotowski`,
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
}

const Page = async ({ params }) => {
	const data = await getWritingsByTag(params.slug)

	if (!data) {
		return <p>Loading...</p>
	}

	return (
		<>
			<TotalWritings amount={data.length} />
			<Spacer />
			<Heading type="tag">
				<h1>Tag</h1>
				<span></span>
				<h1>{params.slug.replaceAll('-', ' ')}</h1>
			</Heading>
			<Spacer size="large" />
			<Writings showTags={true} data={data} />
		</>
	)
}

export default Page
