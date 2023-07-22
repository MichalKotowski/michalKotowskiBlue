import TotalWritings from '@components/TotalWritings'
import Bookmarks from '@components/Bookmarks'
import Spacer from '@components/Spacer'
import { getBookmarks } from '../../lib/api'

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
			<TotalWritings type="bookmark" amount={data.length} />
			<Spacer />
			<h1>Bookmarks</h1>
			<Spacer size="large" />
			<Bookmarks data={data} />
		</>
	)
}

export default Page
