import Pill from '@components/Pill'
import Link from 'next/link'
import styles from './Bookmarks.module.scss'
import { Bookmark } from '../../types/content'
import { FiltersState } from '@components/WritingsContent/WritingsContent'
import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useAnimationOnNavigate } from '@hooks/useAnimationOnNavigate'

interface BookmarksProps {
	data: Bookmark[]
	filters: FiltersState
	handleCategoryChange: (category: string) => void
}

const Bookmarks = ({ data, filters, handleCategoryChange }: BookmarksProps) => {
	const isFirstRenderRef = useRef(true)
	// Needed for page transition animations, even if not directly used
	const onNavigate = useAnimationOnNavigate()

	const extractDomain = (url: string) => {
		let hostname: string

		if (url.indexOf('www') > -1) {
			hostname = url.substring(url.indexOf('.') + 1)
		} else {
			hostname = url.substring(url.indexOf('/') + 2)
		}

		hostname = hostname.split('/')[0]
		return hostname
	}

	useEffect(() => {
		isFirstRenderRef.current = false
	}, [])

	const isVisible = (bookmark: Bookmark) => {
		if (!filters) return true

		const matchesTag =
			(bookmark.tags &&
				Array.isArray(filters.categories) &&
				filters.categories.every((cat) => bookmark.tags.includes(cat))) ||
			filters.categories.includes('all')
		return matchesTag
	}

	const visibleBookmarks = data.filter(isVisible)
	const visibleCount = visibleBookmarks.length

	return (
		<div className={styles.writings}>
			<div className={styles.list}>
				{visibleCount === 0 ? (
					<p className={styles.noResults}>
						No bookmarks match the selected filters
					</p>
				) : (
					<AnimatePresence>
						{visibleBookmarks.map((writing) => (
							<motion.div
								key={writing.slug}
								className={styles.writing}
								initial={
									isFirstRenderRef.current
										? { opacity: 1, height: 'auto', marginTop: 20 }
										: { opacity: 0, height: 0, marginTop: 0 }
								}
								animate={{ opacity: 1, height: 'auto', marginTop: 20 }}
								exit={{ opacity: 0, height: 0, marginTop: 0 }}
								transition={{ duration: 0.3, ease: 'easeInOut' }}
								style={{ overflow: 'hidden' }}
							>
								<div className={styles.rectangle}></div>
								<div className={styles.content}>
									<Link
										className={styles.title}
										href={writing.slug}
										target="_blank"
									>
										<span>{extractDomain(writing.slug)}</span>
										{writing.title}
									</Link>
									{writing.tags && (
										<div className={styles.tags}>
											{writing.tags.map((tag) => (
												<Pill
													key={tag}
													label={tag}
													onClick={() => handleCategoryChange(tag)}
												/>
											))}
										</div>
									)}
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				)}
			</div>
		</div>
	)
}

export default Bookmarks
