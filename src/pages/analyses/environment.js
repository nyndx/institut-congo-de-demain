import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import ArticleList from "../../components/articlelist"

const Environment = ({ data }) => {
  return (
    <Layout>
      <SEO title="Environment"></SEO>
      <ArticleList data={data} category="Environment"></ArticleList>
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
          author {
            id
            name
          }
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
export default Environment
