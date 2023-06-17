'use client'

import { usePathname } from 'next/navigation'
import TotalWritings from '@components/TotalWritings'
import Writings from '@components/Writings'
import Spacer from '@components/Spacer'
import Heading from '@components/Heading'

const Page = () => {
	const tag = usePathname().replace('/tag/', '').replace('-', ' ')

	return (
		<>
			<TotalWritings tag={tag} />
			<Spacer />
			<Heading type="category">
				<h1>Category</h1>
				<span></span>
				<h1>{tag}</h1>
			</Heading>
			<Spacer size="large" />
			<Writings showTags={true} amount={20} tag={tag} />
		</>
	)
}

export default Page
