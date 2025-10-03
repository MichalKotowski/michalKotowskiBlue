'use client'

import styles from './Filters.module.scss'
import Pill from '@components/Pill'
import MetaInfo from '@components/MetaInfo'
import { FiltersState } from '@components/WritingsContent/WritingsContent'

interface FiltersProps {
	filters: FiltersState
	lastUpdate: string
	tags: string[]
	handleLanguageChange?: (language: string) => void
	handleCategoryChange: (category: string) => void
}

const Filters = ({
	filters,
	lastUpdate,
	tags,
	handleLanguageChange,
	handleCategoryChange,
}: FiltersProps) => {
	return (
		<div className={styles.filters}>
			<div className={styles.filter}>
				<MetaInfo label="Last update" value={lastUpdate} />
			</div>
			{filters.language && (
				<div className={styles.filter}>
					<MetaInfo label="Language">
						<div className={styles.tags}>
							<Pill
								label="english"
								isActive={filters.language === 'english'}
								onClick={() =>
									handleLanguageChange && handleLanguageChange('english')
								}
							/>
							<Pill
								label="polish"
								isActive={filters.language === 'polish'}
								onClick={() =>
									handleLanguageChange && handleLanguageChange('polish')
								}
							/>
						</div>
					</MetaInfo>
				</div>
			)}
			<div className={styles.filter}>
				<MetaInfo label="Category">
					<div className={styles.tags}>
						{['all', ...tags].map((category) => (
							<Pill
								key={category}
								label={category}
								isActive={filters.categories.includes(category)}
								onClick={() => handleCategoryChange(category)}
							/>
						))}
					</div>
				</MetaInfo>
			</div>
		</div>
	)
}

export default Filters
