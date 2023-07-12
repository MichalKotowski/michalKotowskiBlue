import TotalWritings from '@components/TotalWritings'
import Writings from '@components/Writings'
import Spacer from '@components/Spacer'
import FlexWrapper from '@components/FlexWrapper'
import { getWritingsByLanguage } from '../../../lib/api'

export async function generateMetadata({ params }) {
	return {
		title: `${params.slug} | Michał Kotowski`,
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
	const data = await getWritingsByLanguage(params.slug === 'english')

	if (!data) {
		return <p>Loading...</p>
	}

	return (
		<>
			<TotalWritings amount={data.length} />
			<Spacer />
			<FlexWrapper type="tag">
				<h1>Language</h1>
				<span></span>
				<h1>{params.slug.replaceAll('-', ' ')}</h1>
			</FlexWrapper>
			<Spacer size="large" />
			<Writings showTags={true} data={data} />
		</>
	)
}

export default Page
