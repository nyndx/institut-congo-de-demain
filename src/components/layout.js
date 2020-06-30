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

import Header from "./header"
import MobileNav from "./mobilenav"

const Layout = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="relative bg-white font-rubik">
        {toggleNav ? (
          <MobileNav toggleNav={toggleNav} setToggleNav={setToggleNav} />
        ) : null}

        <Header
          siteTitle={data.site.siteMetadata.title}
          toggleNav={toggleNav}
          setToggleNav={setToggleNav}
        />
        <main
          className={`container px-8 mx-auto mb-20 font-rubik min-h-60vh ${
            toggleNav && "h-screen overflow-hidden"
          }`}
        >
          {children}
        </main>
        <footer className="p-6 text-white min-h-30vh bg-cool-gray-900">
          <div className="container p-8 mx-auto font-rubik">
            <div className="mb-8">
              <ul className="flex flex-col w-full space-y-4 text-lg font-light">
                <Link to="/">
                  <li className="self-start tracking-widest hover:text-blue-400">
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
              </ul>
            </div>
            <div className="font-light">
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
