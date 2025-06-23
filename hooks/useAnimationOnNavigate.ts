import { useState, useContext, useEffect } from 'react'
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

	useEffect(() => {
			animate(scope?.current, enterAnimation, transitionSettings).then(() => {
				setIsNavigationDisabled(false)
			})
	}, [router])
	
	const onNavigate = async (event: { preventDefault: () => void } , path: string) => {
		event.preventDefault()
		if (isNavigationDisabled) {
			return
		}

		setIsNavigationDisabled(true)

		await animate(scope?.current, exitAnimation, transitionSettings).then(() => {
			router.push(path)
		})

		setTimeout(() => {
			setIsNavigationDisabled(false)
		}, 350)
	}

	return onNavigate
}
