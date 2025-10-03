export interface Writing { 
  slug: string
  english: boolean
  date: string
  title: string
  tags: string[] 
}

export interface Bookmark { 
  slug: string
  date: string
  title: string
  url: string
  tags: string[]
}