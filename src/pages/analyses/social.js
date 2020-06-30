import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ArticleList from "../../components/articlelist"
import { graphql } from "gatsby"

const Social = ({ data }) => {
  return (
    <Layout>
      <SEO title="Social"></SEO>
      <ArticleList data={data} category="Social"></ArticleList>
    </Layout>
  )
}

export const query = graphql`
  query {
    allDatoCmsArticle(
      sort: { fields: publicationdate, order: DESC }
      filter: { category: { tag: { eq: "Social" } } }
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
        }
      }
    }
  }
`

export default Social
