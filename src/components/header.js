import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useSubnav } from "../hooks"
import { slug } from "../utils/index"

import BackgroundHeader from "./backgroundHeader"

const SubnavItem = props => (
  <div className="px-4 py-1 mb-2 rounded-sm hover:text-blue-400">
    <span className="flex items-center justify-between group">
      {props.children}
      <span>
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 ml-4">
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
    </span>
  </div>
)

const Header = ({ siteTitle, toggleNav, setToggleNav }) => {
  const { bgImg, logo } = useStaticQuery(graphql`
    query MyQuery {
      bgImg: file(relativePath: { eq: "trevor-cole-unsplash.jpg" }) {
        sharp: childImageSharp {
          fluid(fit: COVER, maxWidth: 2400) {
            src
          }
        }
      }
      logo: file(relativePath: { eq: "icd-icon.jpg" }) {
        sharp: childImageSharp {
          fluid(fit: COVER) {
            src
          }
          fixed(fit: COVER) {
            src
          }
        }
      }
    }
  `)

  const navlinks = useSubnav()
  return (
    <BackgroundHeader className="relative w-full bg-center bg-cover md:min-h-24rem">
      <div className="w-full h-full bg-black bg-opacity-50 md:min-h-24rem">
        <div className="flex justify-end md:hidden">
          <button
            name="toggle mobile navigation"
            className="mt-6 mr-8"
            onClick={() => setToggleNav(true)}
          >
            <span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-6 h-6 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full text-white ">
          <div className="flex flex-col items-center justify-center mt-8 mb-4 space-y-8">
            <div className="">
              <div className="w-20 h-20 md:h-32 md:w-32">
                <img
                  src={logo.sharp.fluid.src}
                  className="w-full h-full"
                  alt="logo"
                />
              </div>
            </div>
            <h1 className="flex items-center font-sans text-base leading-relaxed tracking-wide sm:text-2xl ">
              <span className="text-2xl sm:text-4xl">I</span>nstitut Congo de
              demain
            </h1>
          </div>
          <div className="hidden w-full max-w-3xl px-6 pt-6 mt-8 font-sans md:block">
            <nav className="flex justify-between w-full text-xs font-light">
              <Link to="/" activeClassName="text-blue-400">
                <span className="tracking-widest uppercase hover:text-blue-400">
                  Accueil
                </span>
              </Link>

              <Link to="/recents" activeClassName="text-blue-400">
                <span className="tracking-widest uppercase hover:text-blue-400">
                  recents
                </span>
              </Link>

              <div className="relative px-4 pb-4 group">
                <Link to="/analyses" activeClassName="text-blue-400">
                  <span className="tracking-widest uppercase group-hover:text-blue-400">
                    analyses
                  </span>
                </Link>
                <div className="absolute z-30 hidden py-2 mt-2 text-white uppercase bg-gray-900 rounded-md shadow-md min-h-10rem group-hover:block hover:block">
                  <div className="space-y-4 text-xs tracking-wide">
                    {navlinks.map(link => (
                      <Link key={link} to={`/analyses/${slug(link)}`}>
                        <SubnavItem>{link}</SubnavItem>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/podcasts" activeClassName="text-blue-400">
                <span className="tracking-widest uppercase hover:text-blue-400">
                  podcasts
                </span>
              </Link>
              <Link to="/a-propos" activeClassName="text-blue-400">
                <span className="tracking-widest uppercase hover:text-blue-400">
                  a propos
                </span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </BackgroundHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
