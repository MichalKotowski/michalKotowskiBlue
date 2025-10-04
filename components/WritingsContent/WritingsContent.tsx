'use client'

import { useState } from 'react'
import TotalWritings from '@components/TotalWritings'
import Writings from '@components/Writings'
import Spacer from '@components/Spacer'
import { toRomanDate } from '../../lib/utilities'
import Filters from '@components/Filters'
import { Writing } from '../../types/content'

interface WritingsContentProps {
	data: Writing[]
}

export interface FiltersState {
	language?: string
	categories: string[]
}

const WritingsContent = ({ data }: WritingsContentProps) => {
	const [filters, setFilters] = useState({
		language: 'english',
		categories: ['all'],
	})

	const handleLanguageChange = (language: string) => {
		setFilters({ ...filters, language })
	}

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
			<TotalWritings type="writing" amount={data.length} />
			<Spacer size="medium" />
			<h1>Notes and Reflections</h1>
			<Spacer size="medium" />
			<Filters
				filters={filters}
				lastUpdate={toRomanDate(data[0].date)}
				tags={tags}
				handleLanguageChange={handleLanguageChange}
				handleCategoryChange={handleCategoryChange}
			/>
			<Spacer size="medium" />
			<Writings
				showTags={true}
				data={data}
				filters={filters}
				handleCategoryChange={handleCategoryChange}
			/>
		</>
	)
}

export default WritingsContent
