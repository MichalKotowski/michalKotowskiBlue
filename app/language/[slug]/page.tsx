import TotalWritings from '@components/TotalWritings'
import Writings from '@components/Writings'
import Spacer from '@components/Spacer'
import FlexWrapper from '@components/FlexWrapper'
import { getWritingsByLanguage } from '../../../lib/api'
import Button from '@components/Button'

export async function generateMetadata({ params }) {
	const { slug } = await params
	const title = slug === 'english' ? 'English' : 'Polish'

	return {
		title: `${title} | Michał Kotowski`,
	}
}

const Page = async ({ params }) => {
	const { slug } = await params
	const data = await getWritingsByLanguage(slug === 'english')

	if (!data) {
		return <p>Loading...</p>
	}

	return (
		<>
			<Spacer size="top" />
			<Button path="/writings" label="Writings" type="back" />
			<Spacer size="large" />
			<TotalWritings type="writing" amount={data.length} />
			<Spacer />
			<FlexWrapper type="tag">
				<h1>Language</h1>
				<span></span>
				<h1>{slug.replaceAll('-', ' ')}</h1>
			</FlexWrapper>
			<Spacer size="large" />
			<Writings showTags={true} data={data} />
		</>
	)
}

export default Page
