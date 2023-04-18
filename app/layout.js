'use client'

import '@styles/reset.scss'
import Navigation from '@components/Navigation'
import Container from '@components/Container'
import Content from '@components/Content'

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<Container>
					<Navigation />
					<Content>{children}</Content>
				</Container>
			</body>
		</html>
	)
}

export default RootLayout
