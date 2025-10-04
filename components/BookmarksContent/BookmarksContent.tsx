'use client'

import Filters from '@components/Filters'
import Spacer from '@components/Spacer'
import TotalWritings from '@components/TotalWritings'
import { useState } from 'react'
import { toRomanDate } from '../../lib/utilities'
import Bookmarks from '@components/Bookmarks'
import { Bookmark } from '../../types/content'

interface BookmarksContentProps {
	data: Bookmark[]
}

const BookmarksContent = ({ data }: BookmarksContentProps) => {
	const [filters, setFilters] = useState({
		categories: ['all'],
	})

	const handleCategoryChange = (category: string) => {
		let categories = filters.categories.includes(category)
			? filters.categories.filter((c) => c !== category)
			: [...filters.categories, category]
		if (category !== 'all' && categories.includes('all'))
			categories = categories.filter((c) => c !== 'all')
		if (categories.length === 0 || category === 'all') categories = ['all']
		setFilters({ ...filters, categories })
	}

	const tags = Array.from(
		new Set(data.flatMap((writing) => writing.tags || []))
	)

	return (
		<>
			<Spacer size="top" />
			<TotalWritings type="bookmark" amount={data.length} />
			<Spacer size="medium" />
			<h1>Finds and Favourites</h1>
			<Spacer size="medium" />
			<Filters
				filters={filters}
				lastUpdate={toRomanDate(data[0].date)}
				tags={tags}
				handleCategoryChange={handleCategoryChange}
			/>
			<Spacer size="medium" />
			<Bookmarks
				data={data}
				filters={filters}
				handleCategoryChange={handleCategoryChange}
			/>
		</>
	)
}

export default BookmarksContent
