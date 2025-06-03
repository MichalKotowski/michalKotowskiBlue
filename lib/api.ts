const WRITINGS_LIST_GRAPHQL_FIELDS = `
  slug
  title
  date
  english
  tags
`

const BOOKMARKS_LIST_GRAPHQL_FIELDS = `
  title
  slug
  date
  tags
`

const WRITING_GRAPHQL_FIELDS = `
  slug
  title
  date
  english
  tags
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`

async function fetchGraphQL(query: string) {
	return fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
			},
			body: JSON.stringify({ query }),
			// next: {
			// 	cache: 'no-store',
			// 	revalidate: 0,
			// },
		}
	).then((response) => response.json())
}

function extractWriting(fetchResponse: { data: { writingCollection: { items: any[] } } }) {
	return fetchResponse?.data?.writingCollection?.items?.[0]
}

function extractWritingEntries(fetchResponse: { data: { writingCollection: { items: any } } }) {
	return fetchResponse?.data?.writingCollection?.items
}

function extractBookmarkEntries(fetchResponse: { data: { bookmarkCollection: { items: any } } }) {
	return fetchResponse?.data?.bookmarkCollection?.items
}

export async function getWritingsByTag(tag: string) {
	const entries = await fetchGraphQL(
		`query {
      writingCollection(where: { tags_contains_some: "${tag}" }, order: date_DESC, limit: 100) {
        items {
          ${WRITINGS_LIST_GRAPHQL_FIELDS}
        }
      }
    }`
	)

	return extractWritingEntries(entries)
}

export async function getWritingsByLanguage(isEnglish: boolean) {
	const entries = await fetchGraphQL(
		`query {
      writingCollection(where: { english: ${isEnglish} }, order: date_DESC, limit: 100) {
        items {
          ${WRITINGS_LIST_GRAPHQL_FIELDS}
        }
      }
    }`
	)

	return extractWritingEntries(entries)
}

export async function getWritings(amount: number) {
	const entries = await fetchGraphQL(
		`query {
        writingCollection(order: date_DESC, limit: ${amount}) {
          items {
            ${WRITINGS_LIST_GRAPHQL_FIELDS}
          }
        }
      }`
	)

	return extractWritingEntries(entries)
}

export async function getWriting(slug: string) {
	const entry = await fetchGraphQL(
		`query {
      writingCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          ${WRITING_GRAPHQL_FIELDS}
        }
      }
    }`
	)
	return {
		writing: extractWriting(entry),
	}
}

export async function getBookmarks(amount: number) {
	const entries = await fetchGraphQL(
		`query {
      bookmarkCollection(order: date_DESC, limit: ${amount}) {
          items {
            ${BOOKMARKS_LIST_GRAPHQL_FIELDS}
          }
        }
      }`
	)

	return extractBookmarkEntries(entries)
}

export async function getBookmarksByTag(tag: string) {
	const entries = await fetchGraphQL(
		`query {
      bookmarkCollection(where: { tags_contains_some: "${tag}" }, order: date_DESC, limit: 100) {
        items {
          ${BOOKMARKS_LIST_GRAPHQL_FIELDS}
        }
      }
    }`
	)

	return extractBookmarkEntries(entries)
}
