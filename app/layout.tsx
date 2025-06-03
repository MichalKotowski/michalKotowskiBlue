'use client'

import '@styles/reset.scss'

import Navigation from '@components/Navigation'
import Container from '@components/Container'
import Content from '@components/Content'
import { motion, useAnimate } from 'framer-motion'
import { JSX, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { TransitionContext } from '@context/TransitionContext'

interface RootLayout {
	children: JSX.Element
}

const RootLayout = ({ children }: RootLayout) => {
	const pathname = usePathname()
	const [scope, animate] = useAnimate()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<html lang="en">
			<GoogleAnalytics trackPageViews />
			<body>
				<TransitionContext.Provider value={{ scope, animate }}>
					<Container>
						<Navigation />
						<motion.div
							initial={{ opacity: 0, x: '30px' }}
							animate={{ opacity: 1, x: '0px' }}
							transition={{
								type: 'spring',
								visualDuration: 0.3,
								bounce: 0.5,
							}}
						>
							<div ref={scope} id="transition">
								<Content>{children}</Content>
							</div>
						</motion.div>
					</Container>
				</TransitionContext.Provider>
			</body>
		</html>
	)
}

export default RootLayout
