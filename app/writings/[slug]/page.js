'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getWritingAndMoreWritings } from '../../../lib/api'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Tags from '@components/Tags'
import Spacer from '@components/Spacer'
import Flag from '@components/Flag'
import Heading from '@components/Heading'

const Page = () => {
	const slug = usePathname().replace('/writings/', '')
	const [data, setData] = useState()

	useEffect(() => {
		const getWriting = async () => {
			const { writing } = await getWritingAndMoreWritings(slug)

			setData(writing)
		}

		getWriting()
	}, [slug])

	if (!data) {
		return <p>Loading...</p>
	}

	return (
		<>
			<Heading>
				<h1>{data.title}</h1>
				<Flag english={data.english} />
			</Heading>
			<Spacer />
			{data.tags && <Tags elements={data.tags} />}
			<Spacer size="large" />
			<article>{documentToReactComponents(data.content.json)}</article>
		</>
	)
}

export default Page
