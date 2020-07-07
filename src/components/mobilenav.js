import React, { useState } from "react"
import { Link } from "gatsby"
import { slug } from "../utils"
import { useSubnav } from "../hooks"

const MobileNav = ({ toggleNav, setToggleNav }) => {
  const [toggleSubNav, setSubNav] = useState(false)
  const navLinks = useSubnav()

  return (
    <div className="fixed z-20 w-full h-screen px-8 pt-6 overflow-y-auto text-white bg-gray-900 md:hidden">
      <div className="flex justify-end mb-8">
        <button onClick={() => setToggleNav(false)}>
          <div>
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      <div className="font-sans text-sm">
        <nav className="">
          <Link to="/" activeClassName="text-blue-400">
            <div
              className="py-4 tracking-widest uppercase border-t border-gray-100 hover:text-blue-400 focus:outline"
              role="button"
              tabIndex="-1"
              onClick={() => setToggleNav(false)}
              onKeyDown={e => e.key === "Enter" && setToggleNav(false)}
            >
              Accueil
            </div>
          </Link>
          <Link to="/recents" activeClassName="text-blue-400">
            <div
              className="py-4 tracking-widest uppercase border-t border-gray-100 hover:text-blue-400"
              role="button"
              tabIndex="-1"
              onClick={() => setToggleNav(false)}
              onKeyDown={e => e.key === "Enter" && setToggleNav(false)}
            >
              recents
            </div>
          </Link>

          <div className="tracking-widest uppercase ">
            <div className="flex items-center justify-between border-t border-gray-100">
              <Link
                to="/analyses"
                activeClassName="text-blue-400 "
                className="flex-1"
              >
                <div
                  className="w-full py-4 tracking-widest uppercase "
                  role="button"
                  tabIndex="-1"
                  onKeyDown={e => e.key === "Enter" && setToggleNav(false)}
                  onClick={() => setToggleNav(false)}
                >
                  analyses
                </div>
              </Link>
              <div
                className="cursor-pointer "
                role="button"
                tabIndex="-1"
                onClick={() => setSubNav(!toggleSubNav)}
                onKeyDown={e => e.key === "Enter" && setSubNav(!toggleSubNav)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6 ml-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            <div className={`ml-4 ${toggleSubNav ? "block" : "hidden"}`}>
              <div className="space-y-4 tracking-widest">
                {navLinks.map(link => (
                  <Link key={link} to={`/analyses/${slug(link)}`}>
                    <div
                      className="py-4 border-t border-gray-100"
                      role="button"
                      tabIndex="-1"
                      onClick={() => setToggleNav(false)}
                      onKeyDown={e => e.key === "Enter" && setToggleNav(false)}
                    >
                      {link}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/podcasts" activeClassName="text-blue-400">
            <div className="py-4 tracking-widest uppercase border-t border-gray-100 hover:text-blue-400">
              podcasts
            </div>
          </Link>
          <Link to="/a-propos" activeClassName="text-blue-400">
            <div
              className="py-4 tracking-widest uppercase border-t border-gray-100 hover:text-blue-400"
              role="button"
              tabIndex="-1"
              onClick={() => setToggleNav(false)}
              onKeyDown={e => e.key === "Enter" && setToggleNav(false)}
            >
              a propos
            </div>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
