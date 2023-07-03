import TotalWritings from '@components/TotalWritings'
import Writings from '@components/Writings'
import Spacer from '@components/Spacer'
import Heading from '@components/Heading'
import { getWritingsByLanguage } from '../../../lib/api'

export async function generateMetadata({ params }) {
	return {
		title: `${params.slug} | Michał Kotowski`,
	}
}

const Page = async ({ params }) => {
	const data = await getWritingsByLanguage(params.slug === 'english')

	if (!data) {
		return <p>Loading...</p>
	}

	return (
		<>
			<TotalWritings amount={data.length} />
			<Spacer />
			<Heading type="tag">
				<h1>Language</h1>
				<span></span>
				<h1>{params.slug.replaceAll('-', ' ')}</h1>
			</Heading>
			<Spacer size="large" />
			<Writings showTags={true} data={data} />
		</>
	)
}

export default Page
