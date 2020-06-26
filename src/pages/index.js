import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-3xl uppercase text-center text-indigo-500">
      Hi people
    </h1>
  </Layout>
)

export default IndexPage
