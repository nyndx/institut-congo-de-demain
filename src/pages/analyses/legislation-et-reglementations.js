import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { graphql } from "gatsby"
import ArticleList from "../../components/articlelist"

const Legislation = ({ data }) => {
  return (
    <Layout>
      <SEO title="Legislation et Reglementations"></SEO>
      <ArticleList
        data={data}
        category="Legislation et Reglementations"
      ></ArticleList>
    </Layout>
  )
}
export const query = graphql`
  query {
    allDatoCmsArticle(
      sort: { fields: publicationdate, order: DESC }
      filter: { category: { tag: { eq: "Legislation et Reglementations" } } }
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
          publicationdate
        }
      }
    }
  }
`
export default Legislation
