'use client'

import Button from '@components/Button'
import Pill from '@components/Pill'
import Link from 'next/link'
import { toRomanDate } from '../../lib/utilities'
import styles from './Writings.module.scss'
import { useAnimationOnNavigate } from '@hooks/useAnimationOnNavigate'
import { Writing } from '../../types/content'
import { FiltersState } from '@components/WritingsContent/WritingsContent'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface WritingsProps {
	displayHeading?: boolean
	showTags?: boolean
	data: Writing[]
	filters?: FiltersState
	handleCategoryChange?: (category: string) => void
}

const Writings = ({
	displayHeading = false,
	showTags = false,
	data,
	filters,
	handleCategoryChange,
}: WritingsProps) => {
	const isFirstRenderRef = useRef(true)
	const onNavigate = useAnimationOnNavigate()

	useEffect(() => {
		isFirstRenderRef.current = false
	}, [])

	const isVisible = (writing: Writing) => {
		if (!filters) return true

		const matchesLanguage =
			(filters.language === 'english' && writing.english) ||
			(filters.language === 'polish' && !writing.english)
		const matchesTag =
			(writing.tags &&
				Array.isArray(filters.categories) &&
				filters.categories.every((cat) => writing.tags.includes(cat))) ||
			filters.categories.includes('all')
		return matchesLanguage && matchesTag
	}

	const visibleWritings = data.filter(isVisible)
	const visibleCount = visibleWritings.length

	return (
		<div className={styles.writings}>
			{displayHeading && (
				<div className={styles.heading}>
					<h2>Latest writings</h2>
					<Button type="tertiary" label="View all" path="/writings" />
				</div>
			)}
			<div className={styles.list}>
				{visibleCount === 0 ? (
					<p className={styles.noResults}>
						No writings match the selected filters
					</p>
				) : (
					<AnimatePresence>
						{visibleWritings.map((writing) => (
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
										href={`/writings/${writing.slug}`}
										onNavigate={(event) =>
											onNavigate(event, `/writings/${writing.slug}`)
										}
									>
										<div className={styles.languageAndDate}>
											<p>{toRomanDate(writing.date)}</p>
										</div>
										<span>{writing.title}</span>
									</Link>
									{showTags && writing.tags && (
										<div className={styles.tags}>
											{writing.tags.map((tag) => (
												<Pill
													key={tag}
													label={tag}
													onClick={() =>
														handleCategoryChange && handleCategoryChange(tag)
													}
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

export default Writings
