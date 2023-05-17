import Writings from '@components/Writings'

const Page = () => (
	<>
		<h1>
			Whenever I have enough time, I love to share my thoughts about almost
			everything
		</h1>
		<Writings showTags={true} amount={13} />
	</>
)

export default Page
