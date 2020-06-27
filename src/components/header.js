import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => {
  const { bgImg, logo } = useStaticQuery(graphql`
    query MyQuery {
      bgImg: file(relativePath: { eq: "annie-unsplash.jpg" }) {
        sharp: childImageSharp {
          fluid(fit: COVER, maxWidth: 2400) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      logo: file(relativePath: { eq: "icd-icon.jpg" }) {
        sharp: childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
          fixed(fit: COVER) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <header className="relative h-40vh">
      <Img
        fluid={bgImg.sharp.fluid}
        className="h-full"
        alt="header background image"
      />
      <div className="absolute inset-0 h-full w-full text-white  flex flex-col items-center justify-center bg-black bg-opacity-50 ">
        <div className="flex flex-col justify-center items-center space-y-8">
          <div className="h-36 w-36 ">
            <Img
              fluid={logo.sharp.fluid}
              className="h-full w-full"
              alt="logo"
            />
          </div>
          <h1 className="font-bold text-2xl tracking-wide font-fira flex items-center leading-relaxed">
            <span className="text-5xl">I</span>nstitut Congolais de demain
          </h1>
        </div>
        <div className="max-w-3xl  w-full py-6 mt-8 ">
          <ul className="flex  w-full justify-between text-xs font-thin">
            <li className="uppercase tracking-widest">Accueil</li>
            <li className="uppercase tracking-widest">a propos</li>
            <li className="uppercase tracking-widest">analises</li>
            <li className="uppercase tracking-widest">podcasts</li>
            <li className="uppercase tracking-widest">contact</li>
          </ul>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
