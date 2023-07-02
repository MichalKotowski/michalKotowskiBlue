import heroImage from '@assets/images/homepage.png'
import Writings from '@components/Writings'
import Spacer from '@components/Spacer'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => (
	<>
		<Image
			quality={100}
			src={heroImage}
			alt="Picture of the author - Michal Kotowski"
		/>
		<Spacer size="medium" />
		<h1>
			Welcome! I&apos;m <Link href="/about">Michał Kotowski</Link>, a web
			developer from Warsaw with experience in design and brand identity.
		</h1>
		<Spacer size="medium" />
		<p>
			I treat this website as my personal playground where I can tinker, learn
			new things and <Link href="/writings">share my knowledge</Link>. While the
			dopamine rush of solving problems plays the main role here, this site
			serves as a medium in which I can give advice through writing - mostly to
			myself. 😅
		</p>
		<Spacer size="huge" />
		<Writings displayHeading={true} amount={3} />
	</>
)

export default Home
