import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Podcasts = () => {
  return (
    <Layout>
      <SEO title="Podcasts"></SEO>
      <div className="mt-8 md:mt-10">
        <h1 className="text-lg font-medium tracking-wide text-blue-400 uppercase">
          Podcasts
        </h1>
        <div>
          <p className="mt-20 text-2xl text-center text-gray-600">
            Pas de Podcasts pour le moment, revenez plus tard!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Podcasts
