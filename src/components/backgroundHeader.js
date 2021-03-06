import { graphql, useStaticQuery } from "gatsby"
import React from "react"
// import styled from "styled-components"

import BackgroundImage from "gatsby-background-image-es5"

const BackgroundHeader = ({ className, children, ...props }) => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "trevor-cole-unsplash.jpg" }) {
          sharp: childImageSharp {
            fluid(quality: 100, maxWidth: 768) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "annie-unsplash.jpg" }) {
          sharp: childImageSharp {
            fluid(quality: 100, maxWidth: 2048) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Watch out for CSS's stacking order, especially when styling the individual
  // positions! The lowermost image comes last!
  const sources = [
    mobileImage.sharp.fluid,
    {
      ...desktopImage.sharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <BackgroundImage
      Tag={`header`}
      id={`media-test`}
      className={className}
      fluid={sources}
    >
      <div>{children}</div>
    </BackgroundImage>
  )
}

export default BackgroundHeader
