const WRITING_GRAPHQL_FIELDS = `
slug
title
date
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

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractWriting(fetchResponse) {
  return fetchResponse?.data?.writingCollection?.items?.[0]
}

function extractWritingEntries(fetchResponse) {
  return fetchResponse?.data?.writingCollection?.items
}

export async function getPreviewWritingBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      writingCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${WRITING_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractWriting(entry)
}

export async function getAllWritingsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      writingCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${WRITING_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractWritingEntries(entries)
}

export async function getAllWritingsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      writingCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}, limit: 10) {
        items {
          ${WRITING_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractWritingEntries(entries)
}

export async function getWritingAndMoreWritings(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      writingCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
        items {
          ${WRITING_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  const entries = await fetchGraphQL(
    `query {
      writingCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
        items {
          ${WRITING_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return {
    writing: extractWriting(entry),
    moreWritings: extractWritingEntries(entries),
  }
}
