import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="flex items-center justify-center min-h-60vh prose">
      <div>
        <h1 className="text-6xl">NOT FOUND</h1>
        <p className="text-3xl">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
        <Link
          to="/recents"
          className="text-sm italic font-medium tracking-widest uppercase "
        >
          <span>&#8592;</span>
          <span className="text-blue-600">Click here to go back</span>
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
