import { getBookmarks } from '../../lib/api'
import BookmarksContent from '@components/BookmarksContent'

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

	return <BookmarksContent data={data} />
}

export default Page
