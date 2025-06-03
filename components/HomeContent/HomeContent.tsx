'use client'

import Link from 'next/link'
import { useAnimationOnNavigate } from '@hooks/useAnimationOnNavigate'
import Spacer from '@components/Spacer'
import Writings from '@components/Writings'
import { Writing } from '../../types/content'

interface HomeContent {
	data: Writing[],
}

const HomeContent = ({ data }: HomeContent) => {
	const onNavigate = useAnimationOnNavigate()

	return (
		<div>
			<p>
				Welcome to my personal playground, a space where I experiment, break
				things, and explore new ideas. I build this site for the thrill of
				solving coding challenges, but it also serves as a{' '}
				<Link
					href="/writings"
					onNavigate={(event) => onNavigate(event, '/writings')}
				>
					knowledge hub
				</Link>{' '}
				for my future self. 😅
			</p>
			<Spacer size="huge" />
			<Writings displayHeading={true} data={data} />
		</div>
	)
}

export default HomeContent
