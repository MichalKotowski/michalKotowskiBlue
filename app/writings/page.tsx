import { getWritings } from '../../lib/api'
import WritingsContent from '@components/WritingsContent'

export const metadata = {
	title: 'Writings | Michał Kotowski',
	description:
		'My name is Michal Kotowski. When time allows, I enjoy putting my thoughts into words and sharing them with others.',
}

const Page = async () => {
	const data = await getWritings(100)

	if (!data) {
		return <p>Loading...</p>
	}

	return <WritingsContent data={data} />
}

export default Page
