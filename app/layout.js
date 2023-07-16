'use client'

import '@styles/reset.scss'

import Navigation from '@components/Navigation'
import Container from '@components/Container'
import Content from '@components/Content'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { GoogleAnalytics } from 'nextjs-google-analytics'

const RootLayout = ({ children }) => {
	const pathname = usePathname()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<html lang="en">
			<GoogleAnalytics trackPageViews />
			<body>
				<Container>
					<Navigation />
					<motion.div
						initial={{ opacity: 0, x: '30px' }}
						animate={{ opacity: 1, x: '0px' }}
						transition={{
							type: 'spring',
							duration: 0.1,
							stiffness: 75,
							duration: 0.3,
						}}
					>
						<Content>{children}</Content>
					</motion.div>
				</Container>
			</body>
		</html>
	)
}

export default RootLayout
