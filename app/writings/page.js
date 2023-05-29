'use client'

import TotalWritings from '@components/TotalWritings'
import Writings from '@components/Writings'

const Page = () => {
	return (
		<>
			<TotalWritings />
			<h1>
				Whenever I have enough time, I love to share my thoughts about almost
				everything
			</h1>
			<Writings showTags={true} amount={20} />
		</>
	)
}

export default Page
