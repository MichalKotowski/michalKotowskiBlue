import { JSX } from 'react'
import styles from './Container.module.scss'

interface Container {
	children: JSX.Element[]
}

const Container = ({ children }: Container) => {
	return <div className={styles.container}>{children}</div>
}

export default Container
