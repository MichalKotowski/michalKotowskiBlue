import { getWritingAndMoreWritings } from '../../../lib/api'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import { MARKS } from '@contentful/rich-text-types'
import 'highlight.js/styles/tokyo-night-dark.css'
import Tags from '@components/Tags'
import Spacer from '@components/Spacer'
import Flag from '@components/Flag'
import Heading from '@components/Heading'

hljs.registerLanguage('javascript', javascript)

export async function generateMetadata({ params }) {
	const { writing } = await getWritingAndMoreWritings(params.slug)

	return {
		title: `${writing.title} | Michał Kotowski`,
	}
}

const Page = async ({ params }) => {
	const { writing } = await getWritingAndMoreWritings(params.slug)

	const options = {
		renderMark: {
			[MARKS.CODE]: (code) => {
				const markup = {
					__html: hljs.highlight(code, { language: 'javascript' }).value,
				}

				return (
					<pre>
						<code
							dangerouslySetInnerHTML={markup}
							class="hljs language-javascript"
						></code>
					</pre>
				)
			},
		},
	}

	if (!writing) {
		return <p>Loading...</p>
	}

	return (
		<>
			<Heading>
				<h1>{writing.title}</h1>
				<Flag english={writing.english} />
			</Heading>
			<Spacer />
			{writing.tags && <Tags elements={writing.tags} />}
			<Spacer size="large" />
			<article>
				{documentToReactComponents(writing.content.json, options)}
			</article>
		</>
	)
}

export default Page
