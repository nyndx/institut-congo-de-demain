import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import ArticleList from "../../components/articlelist"

const Economie = ({ data }) => {
  return (
    <Layout>
      <SEO title="Economie"></SEO>
      <ArticleList data={data} category="Economie"></ArticleList>
    </Layout>
  )
}

export const query = graphql`
  query {
    allDatoCmsArticle(
      sort: { fields: publicationdate, order: DESC }
      filter: { category: { tag: { eq: "Economie" } } }
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

export default Economie
