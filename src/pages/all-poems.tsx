import * as React from 'react'
import { graphql } from 'gatsby'
import slugify from '@sindresorhus/slugify';

import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../components/layout'
import * as styles from './all-poems.module.css'

interface IPoemNode {
  node: {
    id: string
    title: string
    lines: string
  }
}

interface IAllPoem {
  allPoem: {
    edges: IPoemNode[]
  }
}

const AllParksPage = ({ data }: PageProps<IAllPoem>): JSX.Element => {
  const { allPoem } = data

  return (
    <Layout pageId='__page_allParks'>
      <div id="__page_allParks" className='container'>
        <header>
          <h4>William Blake's poems</h4>
        </header>

        <main>
          <ul className={styles.twoCol}>
            {allPoem.edges.map(({ node }) => (
              <li key={node.id}>
                <a href={`/poem/${slugify(node.title)}`}>{node.title}</a>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </Layout>
  )
}

export default AllParksPage

export const Head: HeadFC = () => <title>All Poems</title>

export const query = graphql`
  query {
    allPoem {
      edges {
        node {
          id
          title
          lines
        }
      }
    }
  }
`
