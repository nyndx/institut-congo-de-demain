/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./fontawesome"
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
          className={`container px-8 mt-6 mx-auto max-w-3xl xl:max-w-4xl mb-20 min-h-60vh font-sans `}
        >
          {children}
        </main>
        <footer className="p-6 text-white min-h-30vh bg-cool-gray-900">
          <div className="container max-w-3xl p-8 mx-auto font-sans xl:max-w-4xl">
            <div className="flex mb-8 space-x-6">
              <div>
                <a
                  className="flex items-center text-base leading-6 uppercase"
                  href="mailto:institutcongo@gmail.com"
                >
                  <FontAwesomeIcon
                    icon={"paper-plane"}
                    size="2x"
                    className="hover:text-blue-400"
                  />
                </a>
              </div>
              <div>
                <a
                  className="flex items-center text-base leading-6 uppercase"
                  href="https://twitter.com/icdde"
                >
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    size="2x"
                    className="hover:text-blue-400"
                  />
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
