import type { GatsbyNode } from 'gatsby'
import { getPoems } from './fetch-poems'

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const poems = await getPoems('William Blake')

  poems.forEach(poem => createNode({
    ...poem,
    id: createNodeId(poem.title),
    parent: null,
    children: [],
    internal: {
      type: 'Poem',
      contentDigest: createContentDigest(poem)
    }
  }))
}
