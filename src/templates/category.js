import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import ArticleList from "../components/articlelist"

const Category = ({ pageContext, data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title={pageContext.title}></SEO>

      <ArticleList
        data={data}
        category={pageContext.title}
        show={true}
      ></ArticleList>
    </Layout>
  )
}
export const query = graphql`
  query Category($id: String!) {
    allDatoCmsArticle(
      sort: { fields: publicationdate, order: DESC }
      filter: { category: { id: { eq: $id } } }
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
export default Category
