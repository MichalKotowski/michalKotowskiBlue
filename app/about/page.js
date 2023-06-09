import heroImage from '@assets/images/about.jpg'
import Image from 'next/image'
import Spacer from '@components/Spacer'
import Button from '@components/Button'

export const metadata = {
	title: 'About | Michał Kotowski',
	description:
		'My name is Michal Kotowski. I am an aspiring music producer, graphic designer, but most of all - a developer.',
	robots: {
		index: false,
		follow: false,
		googleBot: {
			index: false,
			follow: false,
			noimageindex: false,
		},
	},
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
			My name is Michal Kotowski. I am an aspiring music producer, graphic
			designer, but most of all - a developer. I love being outdoors, riding my
			bike and expanding my skills in all areas. I&apos;m into minimalism,
			mindfulness and self-development. Based in Warsaw.
		</p>
		<Spacer size="medium" />
		<p>
			I would like to thank the creators of lofi hip hop, without whom I would
			not be able to concentrate and accomplish all the things I have achieved.
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
