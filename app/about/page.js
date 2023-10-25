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
			As you may have guessed, my name is <strong>Michał Kotowski</strong>.
			I&apos;m very lucky, because my work is also my passion. I really enjoy
			fiddling around with code, but I also adore making web pretty. I would
			like to spend more time producing songs - the idea of sharing your
			emotions and personality through music is something I crave every day.
			Recently, I&apos;ve taken up a new hobby,{' '}
			<a href="https://www.instagram.com/kocie420/" target="_blank">
				photography
			</a>
			. At least twice a week, you can see me on the pitch playing football. I
			love climbing, whether it be outdoors or indoors. Snorkelling is also my
			thing, and I&apos;m trying to work up the courage, to finally do the scuba
			diving course.
		</p>
		<Spacer size="medium" />
		<p>
			I was <strong>born and raised in the capital of Poland, Warsaw</strong>.
			My past is quite wild, and I still can&apos;t believe that I managed to
			get rid of depression and make a career out of nothing.
		</p>
		<Spacer size="medium" />
		<p>
			I currently{' '}
			<strong>work in the Data Cloud sector as a software engineer</strong>.
			It&apos;s a great privilege because it&apos;s hard to make a living in our
			country. I really appreciate everything I have, and I&apos;m full of love
			for everything around me. My family, friends, random people who are kind
			to me - you name it.
		</p>
		<Spacer size="medium" />
		<p>
			Thank you, dear reader. I really appreciate you taking the time to read
			all of this. Have a nice day!
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
