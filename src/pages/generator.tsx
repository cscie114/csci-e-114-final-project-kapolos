import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../components/layout'
import PoetryMaker from '../components/poetryMaker'

import * as styles from './generator.module.css'

const GeneratorPage: React.FC<PageProps<never>> = (props) => {
  return (
    <Layout pageId="__generator">

      <div className="container">
        <div>
          <h3>
            Generate your own Blake poem!
          </h3>

          <StaticImage src="../images/static/generator_blake.jpg" alt="William Blake Art"/>
        </div>

        <div className={styles.description}>
          <p>
            By the wonders of ChatGPT
          </p>
          <p>you too may now</p>
          <p>a poet be</p>
        </div>

        <div className={styles.poetry}>
          <PoetryMaker />
        </div>
      </div>

    </Layout>
  )
}

export default GeneratorPage

export const Head: HeadFC = () => <title>Poem Generator</title>
