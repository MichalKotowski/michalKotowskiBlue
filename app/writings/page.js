'use client'

import TotalWritings from '@components/TotalWritings'
import Writings from '@components/Writings'
import Spacer from '@components/Spacer'

const Page = () => {
	return (
		<>
			<TotalWritings />
			<Spacer />
			<h1>
				Whenever I have enough time, I love to share my thoughts about almost
				everything
			</h1>
			<Spacer size="large" />
			<Writings showTags={true} amount={20} />
		</>
	)
}

export default Page
