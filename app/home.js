import heroImage from '@assets/images/homepage.png'
import Button from '@components/Button'
import Writings from '@components/Writings'
import Spacer from '@components/Spacer'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => (
	<>
		<Image quality={100} src={heroImage} alt="Michal Kotowski" />
		<Spacer size="medium" />
		<h1>
			I’m <Link href="/about">Michał Kotowski</Link>, a web developer from
			Warsaw with experience in design, digital, print and brand identity.
		</h1>
		<Spacer size="medium" />
		<p>
			I treat this website as my personal playground where I can tinker, learn
			new things and <Link href="/writings">share my knowledge</Link>. While the
			dopamine rush from solving problems plays the main role here, this site
			serves as a medium in which I can give advice through writing - primarily
			to myself. 😅
		</p>
		<Spacer size="large" />
		<div>
			<Button type="primary" path="/about" label="About" />
			<Button type="secondary" path="/writings" label="Writings" />
			<Button type="tertiary" path="/writings" label="See all" />
		</div>
		<Spacer size="huge" />
		<Writings displayHeading={true} />
	</>
)

export default Home
