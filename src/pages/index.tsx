import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../components/layout'
import * as styles from './index.module.css'
// import { graphql } from 'gatsby'

const IndexPage: React.FC<PageProps<never>> = (props) => {
  return (
    <Layout pageId="__homepage">

      <div className={`container ${styles.twoCol}`}>
        <div className={styles.left}>
          <h3>
            William Blake poetry ...with extras
          </h3>

          <StaticImage src="../images/static/william_blake1.jpg" alt="William Blake"/>
        </div>

        <div className={styles.right}>
          <ul>
            <li>
              <a href="/all-poems">All Poems</a>
            </li>
            <li>
              <a href="/generator">Blake Poem Generator</a>
            </li>
          </ul>

          <p>I am an amateur music producer. In two songs, I have used Blake's poetry. Enjoy!</p>

          <ul>
            <li>
              <a href="/poem/the-little-boy-lost/">The Little Boy Lost</a>
            </li>
            <li>
              <a href="/poem/the-tyger/">The Tyger</a>
            </li>
          </ul>
        </div>
      </div>

    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
