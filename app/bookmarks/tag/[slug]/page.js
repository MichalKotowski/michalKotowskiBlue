import TotalWritings from '@components/TotalWritings'
import Bookmarks from '@components/Bookmarks'
import Spacer from '@components/Spacer'
import FlexWrapper from '@components/FlexWrapper'
import { getBookmarksByTag } from '../../../../lib/api'

export async function generateMetadata({ params }) {
	return {
		title: `${params.slug.replaceAll('-', ' ')} | Michał Kotowski`,
	}
}

const Page = async ({ params }) => {
	const data = await getBookmarksByTag(params.slug)

	if (!data) {
		return <p>Loading...</p>
	}

	return (
		<>
			<TotalWritings type="bookmark" amount={data.length} />
			<Spacer />
			<FlexWrapper type="tag">
				<h1>Tag</h1>
				<span></span>
				<h1>{params.slug.replaceAll('-', ' ')}</h1>
			</FlexWrapper>
			<Spacer size="large" />
			<Bookmarks data={data} />
		</>
	)
}

export default Page
