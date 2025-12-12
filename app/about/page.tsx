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
		<Image
			quality={100}
			src={heroImage}
			alt="Michal Kotowski"
			width={1120}
			height={500}
			placeholder="blur"
		/>
		<Spacer size="large" />
		<h1>Hello, World!</h1>
		<Spacer size="medium" />
		<p>
			I&apos;m <strong>Michał Kotowski</strong>, a software engineer from Warsaw
			with a passion for crafting digital experiences. Whether I&apos;m writing
			code, brainstorming ideas, or refining design systems, I take joy in
			building things that are both functional and beautiful
		</p>
		<Spacer size="medium" />
		<p>
			Beyond the screen, I&apos;m deeply curious about the human mind -
			particularly how mindfulness influences us and what drives our behavior,
			especially in the context of status games
		</p>
		<Spacer size="medium" />
		<p>
			I’m incredibly grateful for where I am today and excited about what’s
			ahead, thanks for stopping by!
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
				path="https://www.chess.com/member/ikocie"
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
