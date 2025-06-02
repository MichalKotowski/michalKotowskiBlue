import TotalWritings from '@components/TotalWritings'
import Writings from '@components/Writings'
import Spacer from '@components/Spacer'
import FlexWrapper from '@components/FlexWrapper'
import { getWritingsByTag } from '../../../lib/api'

export async function generateMetadata({ params }) {
	const { slug } = await params

	return {
		title: `${slug.replaceAll('-', ' ')} | Michał Kotowski`,
	}
}

const Page = async ({ params }) => {
	const { slug } = await params
	const data = await getWritingsByTag(slug)

	if (!data) {
		return <p>Loading...</p>
	}

	return (
		<>
			<TotalWritings type="writing" amount={data.length} />
			<Spacer />
			<FlexWrapper type="tag">
				<h1>Tag</h1>
				<span></span>
				<h1>{slug.replaceAll('-', ' ')}</h1>
			</FlexWrapper>
			<Spacer size="large" />
			<Writings showTags={true} data={data} />
		</>
	)
}

export default Page
