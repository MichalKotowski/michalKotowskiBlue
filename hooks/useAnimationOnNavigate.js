import { useState, useContext } from 'react'
import { TransitionContext } from '@context/TransitionContext'
import { useRouter } from 'next/navigation'

const enterAnimation = { opacity: 1, x: '0px' }
const exitAnimation = { opacity: 0, x: '30px' }
const transitionSettings = {
	visualDuration: 0.3,
}

export const useAnimationOnNavigate = () => {
	const { scope, animate } = useContext(TransitionContext)
	const [isNavigationDisabled, setIsNavigationDisabled] = useState(false)
	const router = useRouter()

	const onNavigate = async (event, path) => {
		event.preventDefault()

		if (isNavigationDisabled) {
			return
		}

		setIsNavigationDisabled(true)

		await animate(scope.current, exitAnimation, transitionSettings).then(() => {
			router.push(path)
		})

		setTimeout(() => {
			animate(scope.current, enterAnimation, transitionSettings)
			setIsNavigationDisabled(false)
		}, 350)
	}

	return onNavigate
}
