import heroImage from '@assets/images/about.jpg'
import Image from 'next/image'
import Spacer from '@components/Spacer'
import Button from '@components/Button'

export const metadata = {
	title: 'About | Michał Kotowski',
	description:
		'My name is Michal Kotowski. I am an aspiring music producer, graphic designer, but most of all - a developer.',
}

const Page = () => (
	<>
		<Image
			quality={100}
			src={heroImage}
			alt="Michal Kotowski"
			placeholder="blur"
		/>
		<Spacer size="large" />
		<h1>Hello, World!</h1>
		<Spacer size="medium" />
		<p>
			I&apos;m <strong>Michał Kotowski</strong>, a software engineer from Warsaw
			who loves crafting digital experiences. Whether I&apos;m writing code,
			designing UIs, or refining design systems, I find joy in building things
			that are both functional and beautiful. My work blends logic with
			creativity, and I wouldn&apos;t have it any other way.
		</p>
		<Spacer size="medium" />
		<p>
			Beyond the screen, music is my second language—I produce tracks in DAWs,
			play the piano, and find endless inspiration in sound. Books keep me
			curious, and lofi hip hop was my companion during late-night coding
			sessions when I first started this journey. When I need a break,
			you&apos;ll probably find me biking through the city or playing football.
		</p>
		<Spacer size="medium" />
		<p>
			I&apos;m deeply grateful for where I am today and excited about
			what&apos;s ahead. Thanks for stopping by!
		</p>
		<Spacer size="large" />
		<Button
			path="https://open.spotify.com/user/21zcittwmfkp4km4habttajqa?si=89127a6b6f844bed"
			label="Spotify"
			type="primary"
			target="_blank"
		/>
	</>
)

export default Page
