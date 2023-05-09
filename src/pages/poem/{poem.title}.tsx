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

      {poem.title === 'The Little Boy Lost' && (
        <section className={styles.audio}>
          <p>This is an half-made song. I really really like it so far.</p>
          <audio controls>
            <source src="/The%20Little%20Boy%20Lost%20WIP.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </section>
      )}

      {poem.title === 'The Tyger' && (
        <section className={styles.audio}>
          <p>I wrote the vocal melody sang it. The music came from a random reddit post in <a href="https://www.reddit.com/r/BedroomBands/comments/nzz4wl/complete_added_vocals_to_ualonesolution1132_s/">/r/BedroomBands</a></p>
          <audio controls>
            <source src="/Vocals.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </section>
      )}

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
