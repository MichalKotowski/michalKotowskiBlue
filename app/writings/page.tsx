import TotalWritings from '@components/TotalWritings'
import Writings from '@components/Writings'
import Spacer from '@components/Spacer'
import { getWritings } from '../../lib/api'
import FlexWrapper from '@components/FlexWrapper'
import { toRomanDate } from '../../lib/utilities'

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

	return (
		<>
			<Spacer size="top" />
			<TotalWritings type="writing" amount={data.length} />
			<Spacer size="medium" />
			<h1>Notes and Reflections</h1>
			<Spacer size="small" />
			<FlexWrapper type="bookmark">
				<p>Last update</p>
				<span></span>
				<p>{toRomanDate(data[0].date)}</p>
			</FlexWrapper>
			<Spacer size="large" />
			<Writings showTags={true} data={data} />
		</>
	)
}

export default Page
