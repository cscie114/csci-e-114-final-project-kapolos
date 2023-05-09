import React from 'react'
import { useStaticQuery , graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import * as styles from './index.module.css'

interface IQueryData {
  allFile: {
    edges: Array<{
      node: {
        childrenImageSharp: Array<{
          id: string
          gatsbyImageData: IGatsbyImageData
        }>
      }
    }>
  }
}

const query = graphql`
  query blakeArt {
    allFile(filter: {sourceInstanceName: {eq: "blakeArt"}}) {
      edges {
        node {
          name
          relativePath
          childrenImageSharp {
            id
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`

const RandomArt = (): JSX.Element => {
  const data = useStaticQuery<IQueryData>(query)
  const imageNodes = data.allFile.edges

  if (imageNodes.length === 0) {
    return <div>No Blake Art images available.</div>
  }

  const image = imageNodes[Math.floor(Math.random() * imageNodes.length)].node.childrenImageSharp[0]

  return (
    <GatsbyImage
      key={image.id}
      image={image.gatsbyImageData}
      alt="Park Image"
      className={styles.image}
    />
  )
}

export default RandomArt
