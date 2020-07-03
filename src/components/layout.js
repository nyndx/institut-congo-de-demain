/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import Header from "./header"
import MobileNav from "./mobilenav"

const Layout = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      siteseo: datoCmsSiteseo {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
      }
      fav: datoCmsSite {
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <HelmetDatoCms
        favicon={data.fav.faviconMetaTags}
        seo={data.siteseo.seoMetaTags}
      />
      <div
        className={`relative bg-white font-rubik ${
          toggleNav && "h-screen overflow-hidden"
        }`}
      >
        {toggleNav ? (
          <MobileNav toggleNav={toggleNav} setToggleNav={setToggleNav} />
        ) : null}

        <Header
          siteTitle={data.site.siteMetadata.title}
          toggleNav={toggleNav}
          setToggleNav={setToggleNav}
        />
        <main
          className={`container px-8 mx-auto max-w-3xl xl:max-w-4xl mb-20 font-sans min-h-60vh font-sans `}
        >
          {children}
        </main>
        <footer className="p-6 text-white min-h-30vh bg-cool-gray-900">
          <div className="container max-w-3xl p-8 mx-auto font-sans xl:max-w-4xl">
            <div className="mb-8">
              {/* <ul className="flex flex-col w-full m-0 space-y-2">
                <Link to="/">
                  <li className="self-start pl-0 ml-0 tracking-widest hover:text-blue-400">
                    Accueil
                  </li>
                </Link>
                <Link to="/a-propos">
                  <li className="tracking-widest hover:text-blue-400">
                    A propos
                  </li>
                </Link>
                <Link to="/analyses">
                  <li className="tracking-widest hover:text-blue-400">
                    Analyses
                  </li>
                </Link>
                <Link to="/podcasts">
                  <li className="tracking-widest hover:text-blue-400">
                    Podcasts
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="tracking-widest hover:text-blue-400">
                    Contact
                  </li>
                </Link>
              </ul> */}
              <div className="">
                <a
                  className="flex items-center text-base leading-6 uppercase"
                  href="mailto:name@rapidtables.com"
                >
                  <span>contact us</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6 ml-2 text-white"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-sm font-light">
              <span className="font-medium">
                Copyright © {new Date().getFullYear()},
              </span>
              {` `}
              Institut Congo de demain
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
