import TotalWritings from '@components/TotalWritings'
import Writings from '@components/Writings'
import Spacer from '@components/Spacer'

export const metadata = {
	title: 'Writings | Michał Kotowski',
	description:
		'My name is Michal Kotowski. Whenever I have enough time on my hands, I like to share my thoughts on just about everything.',
}

const Page = () => {
	return (
		<>
			<TotalWritings />
			<Spacer />
			<h1>
				Whenever I have enough time on my hands, I like to share my thoughts on
				just about everything.
			</h1>
			<Spacer size="large" />
			<Writings showTags={true} amount={20} />
		</>
	)
}

export default Page
