import { getWriting } from '../../../lib/api'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import { MARKS, BLOCKS } from '@contentful/rich-text-types'
import 'highlight.js/styles/tokyo-night-dark.css'
import Tags from '@components/Tags'
import Spacer from '@components/Spacer'
import Flag from '@components/Flag'
import Heading from '@components/Heading'
import Button from '@components/Button'

hljs.registerLanguage('javascript', javascript)

export async function generateMetadata({ params }) {
	const { writing } = await getWriting(params.slug)

	return {
		title: `${writing.title} | Michał Kotowski`,
	}
}

const Page = async ({ params }) => {
	const { writing } = await getWriting(params.slug)

	const options = {
		renderMark: {
			[MARKS.CODE]: (code) => {
				const markup = {
					__html: hljs.highlight(code, { language: 'javascript' }).value,
				}

				return (
					<pre>
						<code className="hljs language-javascript">
							<div dangerouslySetInnerHTML={markup}></div>
						</code>
					</pre>
				)
			},
		},
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => <div>{children}</div>,
			// [BLOCKS.EMBEDDED_ASSET]: (node, children) => console.log('yuh')
		},
	}

	if (!writing) {
		return <p>Loading...</p>
	}

	return (
		<>
			<Button path="/writings" label="Go back" type="back" />
			<Spacer size="medium" />
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
