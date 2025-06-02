import { getWritings } from '../lib/api'
import HomeHeader from '@components/HomeHeader'
import HomeContent from '@components/HomeContent'

export const metadata = {
	title: 'Home | Michał Kotowski',
	description:
		"I'm Michał Kotowski, a software engineer from Warsaw with a background in design and brand identity",
}

const Page = async () => {
	const data = await getWritings(3)

	if (!data) {
		return <p>Loading...</p>
	}

	return (
		<>
			<HomeHeader />
			<HomeContent data={data} />
		</>
	)
}

export default Page
