import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleList from "../components/articlelist"

import { graphql } from "gatsby"

const Recents = ({ data }) => {
  return (
    <Layout>
      <SEO title="Recents"></SEO>
      <div className="mt-8 md:mt-10">
        <h1 className="pb-4 text-lg font-medium tracking-wide text-blue-400 uppercase border-b-2 border-gray-200">
          Articles recents
        </h1>
        <div className="max-w-3xl mt-8">
          <ArticleList data={data} show={false} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allDatoCmsArticle(
      sort: { fields: publicationdate, order: DESC }
      limit: 25
    ) {
      edges {
        node {
          title
          excerpt
          slug
          id
          category {
            tag
          }
          subcategory {
            tag
            id
          }
          publicationdate
        }
      }
    }
  }
`

export default Recents
