export interface NavigationItemProps {
	path: string
	icon: string
	label: string
	onNavigate?: (event: Event | { preventDefault: () => void }) => void
}

export const navigationItems: NavigationItemProps[] = [
	{
		path: '/',
		icon: 'home',
		label: 'Home',
	},
	{
		path: '/writings',
		icon: 'writings',
		label: 'Writings',
	},
	{
		path: '/bookmarks',
		icon: 'bookmarks',
		label: 'Bookmarks',
	},
	{
		path: '/about',
		icon: 'about',
		label: 'About',
	},
]

export interface SocialItem {
	href: string
	icon: string
}

export const socialItems: SocialItem[] = [
	{
		href: 'https://github.com/MichalKotowski',
		icon: 'github',
	},
	{
		href: 'https://www.goodreads.com/kocie',
		icon: 'goodreads',
	},
	{
		href: 'https://www.youtube.com/@kocie420',
		icon: 'youtube',
	},
	{
		href: 'https://www.instagram.com/kocie420',
		icon: 'instagram',
	},
	{
		href: 'mailto:hello@michalkotowski.pl',
		icon: 'mail',
	},
]
