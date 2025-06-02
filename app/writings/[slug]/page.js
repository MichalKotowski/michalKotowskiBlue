import { getWriting } from '../../../lib/api'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import { MARKS, BLOCKS } from '@contentful/rich-text-types'
import 'highlight.js/styles/tokyo-night-dark.css'
import Tags from '@components/Tags'
import Spacer from '@components/Spacer'
import Flag from '@components/Flag'
import FlexWrapper from '@components/FlexWrapper'
import Button from '@components/Button'
import ContentfulImage from '../../../components/ContentfulImage'

hljs.registerLanguage('javascript', javascript)

export async function generateMetadata({ params }) {
	const { slug } = await params
	const { writing } = await getWriting(slug)

	return {
		title: `${writing.title} | Michał Kotowski`,
	}
}

const Page = async ({ params }) => {
	const { slug } = await params
	const { writing } = await getWriting(slug)

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
			[BLOCKS.EMBEDDED_ASSET]: (node, children) =>
				ContentfulImage(
					node.data.target.sys.id,
					writing.content.links.assets.block
				),
		},
	}

	if (!writing) {
		return <p>Loading...</p>
	}

	return (
		<>
			<FlexWrapper>
				<Button path="/writings" label="Go back" type="back" />
				<Flag english={writing.english} />
			</FlexWrapper>
			<Spacer size="medium" />
			<h1>{writing.title}</h1>
			{writing.tags && <Tags elements={writing.tags} />}
			<Spacer size="large" />
			<article>
				{documentToReactComponents(writing.content.json, options)}
			</article>
		</>
	)
}

export default Page
