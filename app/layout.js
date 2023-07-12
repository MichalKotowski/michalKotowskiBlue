'use client'

import '@styles/reset.scss'

import Navigation from '@components/Navigation'
import Container from '@components/Container'
import Content from '@components/Content'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const RootLayout = ({ children }) => {
	useEffect(() => window.document.body.scrollTo(0, 0), [])

	function scrollToTop() {
		window.document.body.scrollIntoView()
	}

	return (
		<html lang="en">
			<body onLoad={() => scrollToTop()}>
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
