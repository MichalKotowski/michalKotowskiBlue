const WRITINGS_LIST_GRAPHQL_FIELDS = `
  slug
  title
  date
  english
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

async function fetchGraphQL(query) {
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

function extractWriting(fetchResponse) {
	return fetchResponse?.data?.writingCollection?.items?.[0]
}

function extractWritingEntries(fetchResponse) {
	return fetchResponse?.data?.writingCollection?.items
}

export async function getWritingsByTag(tag) {
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

export async function getWritingsByLanguage(isEnglish) {
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

export async function getWritings(amount) {
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

export async function getWriting(slug) {
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
