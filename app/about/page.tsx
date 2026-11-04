import heroImage from '@assets/images/kitkowjapan.webp'
import Image from 'next/image'
import Spacer from '@components/Spacer'
import Button from '@components/Button'
import FlexWrapper from '@components/FlexWrapper'

export const metadata = {
	title: 'About | Michał Kotowski',
	description:
		'My name is Michal Kotowski. I am an aspiring music producer, graphic designer, but most of all - a developer.',
}

const Page = () => (
	<>
		<Spacer size="top" />
		<div className="temporaryImageWrapper">
			<Image
				quality={100}
				src={heroImage}
				alt="Michal Kotowski"
				width={1120}
				height={500}
				placeholder="blur"
			/>
		</div>
		<Spacer size="large" />
		<h1>Hello, World!</h1>
		<Spacer size="medium" />
		<p>
			I’m <strong>Michał Kotowski</strong>, a product-minded engineer based in
			Warsaw. Before software, I worked in graphic design. That's why I obsess
			over thoughtful web interfaces, solid typographic hierarchy, and those
			little browser interactions that make you stop and think,{' '}
			<i>"someone really cared about making this"</i>
		</p>
		<Spacer size="medium" />
		<p>
			Having reached financial independence early, I’m able to spend my 30s
			living simply and at my own pace. Most of my days are split between making
			music, tinkering with code, and diving down rabbit holes - whether that’s
			markets, tech, deep-dive Substacks, or whatever book is currently on my
			desk
		</p>
		<Spacer size="medium" />
		<p>
			This space is where I capture what I learn along the way.
			<br />
			Thanks for stopping by!
		</p>
		<Spacer size="huge" />
		<h2>Find me elsewhere</h2>
		<Spacer size="medium" />
		<FlexWrapper type="about">
			<Button
				path="https://open.spotify.com/user/21zcittwmfkp4km4habttajqa?si=89127a6b6f844bed"
				label="spotify"
				type="secondary"
				target="_blank"
			/>
			<Button
				path="https://www.chess.com/member/kocie420"
				label="chess"
				type="secondary"
				target="_blank"
			/>
			<Button
				path="https://github.com/MichalKotowski"
				label="github"
				type="secondary"
				target="_blank"
			/>
			<Button
				path="https://www.goodreads.com/kocie"
				label="goodreads"
				type="secondary"
				target="_blank"
			/>
			<Button
				path="https://www.youtube.com/@kocie420"
				label="youtube"
				type="secondary"
				target="_blank"
			/>
			<Button
				path="https://www.instagram.com/kocie420"
				label="instagram"
				type="secondary"
				target="_blank"
			/>
		</FlexWrapper>
	</>
)

export default Page
