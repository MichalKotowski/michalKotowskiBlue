'use client'

import { AnimationScope } from 'framer-motion'
import { createContext } from 'react'

interface TransitionContextInterface {
	scope: AnimationScope<any> | undefined,
	animate: any,
}

export const TransitionContext = createContext<TransitionContextInterface>({
	scope: undefined,
	animate: undefined,
})
