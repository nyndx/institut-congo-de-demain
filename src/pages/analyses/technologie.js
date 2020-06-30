import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import ArticleList from "../../components/articlelist"

const Technologie = ({ data }) => {
  return (
    <Layout>
      <SEO title="Technolgie"></SEO>
      <ArticleList data={data} category="Technologie"></ArticleList>
    </Layout>
  )
}
export const query = graphql`
  query {
    allDatoCmsArticle(
      sort: { fields: publicationdate, order: DESC }
      filter: { category: { tag: { eq: "Technologie" } } }
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
export default Technologie
