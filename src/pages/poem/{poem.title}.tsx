import React, { FC } from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../../components/layout'
import RandomArt from '../../components/randomArt'

import * as styles from './poem.module.css'

interface IPoem {
  poem: {
    id: string
    title: string
    lines: string[]
  }
}

const Poem: FC<PageProps<IPoem>> = ({ data }) => {
  const { poem } = data

  return (
    <Layout pageId="__poem">
      <header className={`container ${styles.header}`}>
        <h3>{poem.title}</h3>
      </header>

      <aside className={styles.image}>
        <RandomArt />
      </aside>

      <main className={styles.main}>
        <div className={styles.poem}>
          {poem.lines.map((line, index) => (<p key={index}>{line}</p>))}
        </div>
      </main>

      <aside className={styles.image}>
        <RandomArt />
      </aside>

    </Layout>
  )
}

export default Poem

export const query = graphql`
  query($title: String) {
    poem (title: {eq: $title}) {
      id
      title
      lines
    }
  }
`
