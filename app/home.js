import heroImage from '@assets/images/homepage.png'
import Button from '@components/Button'
import Writings from '@components/Writings'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
	return (
		<>
			<Image quality={100} src={heroImage} alt="Michal Kotowski" />
			<h1>
				I’m <Link href="/about">Michał Kotowski</Link>, a web developer from
				Warsaw with experience in design, digital, print and brand identity.
			</h1>
			<p>
				I treat this website as my personal playground where I can tinker, learn
				new things and <Link href="/writings">share my knowledge</Link>. While
				the dopamine rush from solving problems plays the main role here, this
				site serves as a medium in which I can give advice through writing -
				primarily to myself. 😅
			</p>
			<div>
				<Button type="primary" path="/about" label="About" />
				<Button type="secondary" path="/writings" label="Writings" />
				<Button type="tertiary" path="/writings" label="See all" />
			</div>
			<Writings displayHeading={true} />
		</>
	)
}

export default Home
