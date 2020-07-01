import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import ArticleList from "../../components/articlelist"

const Politique = ({ data }) => {
  return (
    <Layout>
      <SEO title="Politique"></SEO>
      <ArticleList data={data} category="Politique"></ArticleList>
    </Layout>
  )
}

export const query = graphql`
  query {
    allDatoCmsArticle(
      sort: { fields: publicationdate, order: DESC }
      filter: { category: { tag: { eq: "Environment" } } }
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

export default Politique
