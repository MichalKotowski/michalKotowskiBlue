import TotalWritings from '@components/TotalWritings'
import Bookmarks from '@components/Bookmarks'
import Spacer from '@components/Spacer'
import { getBookmarks } from '../../lib/api'
import FlexWrapper from '@components/FlexWrapper'
import { toRomanDate } from '../../lib/utilities'

export const metadata = {
	title: 'Bookmarks | Michał Kotowski',
	description:
		'My name is Michal Kotowski. I love to learn from the wisdom of others, I hope you do too!',
}

const Page = async () => {
	const data = await getBookmarks(100)

	if (!data) {
		return <p>Loading...</p>
	}

	return (
		<>
			<Spacer size="top" />
			<TotalWritings type="bookmark" amount={data.length} />
			<Spacer />
			<h1>Bookmarks</h1>
			<FlexWrapper type="bookmark">
				<p>Last update</p>
				<span></span>
				<p>{toRomanDate(data[0].date)}</p>
			</FlexWrapper>
			<Spacer size="large" />
			<Bookmarks data={data} />
		</>
	)
}

export default Page
