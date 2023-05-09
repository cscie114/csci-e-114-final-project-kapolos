import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../components/layout'
import PoetryMaker from '../components/poetryMaker'

// import * as styles from './generator.module.css'

const GeneratorPage: React.FC<PageProps<never>> = (props) => {
  return (
    <Layout pageId="__homepage">

      <div className="container">
        <div>
          <h3>
            Generate your own Blake poem!
          </h3>

          <StaticImage src="../images/static/generator_blake.jpg" alt="William Blake Art"/>
        </div>

        <div>
          <PoetryMaker />
        </div>
      </div>

    </Layout>
  )
}

export default GeneratorPage

export const Head: HeadFC = () => <title>Poem Generator</title>
