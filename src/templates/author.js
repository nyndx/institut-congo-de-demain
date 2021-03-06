import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleList from "../components/articlelist"

import { graphql } from "gatsby"
const Author = ({ pageContext, data, location }) => {
  return (
    <Layout>
      <SEO title={pageContext.name} pathname={location.pathname}></SEO>
      <div className="mt-8 md:mt-10">
        <h1 className="pb-4 text-lg italic font-medium tracking-wide text-blue-400 border-b-2 border-gray-200">
          Articles par {pageContext.name}
        </h1>
        <div>
          <ArticleList data={data} show={false} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Author($id: String!) {
    allDatoCmsArticle(
      sort: { fields: publicationdate, order: DESC }
      filter: { author: { elemMatch: { id: { eq: $id } } } }
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

export default Author
