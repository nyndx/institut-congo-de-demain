import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = ({ data }) => {
  const post = data.datoCmsArticle
  console.log(post)
  return (
    <Layout>
      <SEO title=""></SEO>
      <div>
        <h1>titre</h1>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query postQuery($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      author {
        id
        image {
          alt
          url
        }
        name
      }
      category {
        id
        tag
      }
      title
      slug
      id
      seoMetaTags {
        tags
      }
      content {
        ... on DatoCmsText {
          id
          text
        }
        ... on DatoCmsImage {
          id
          image {
            url
            title
            alt
            sizes {
              tracedSVG
              srcSet
              src
            }
          }
        }
        ... on DatoCmsQuote {
          id
          author
          quote
        }
        ... on DatoCmsTextImage {
          id
          text
          image {
            alt
            sizes {
              tracedSVG
              srcSet
              src
            }
            url
            title
            resolutions {
              tracedSVG
              srcSet
              src
            }
            fluid {
              tracedSVG
              srcSet
              src
            }
          }
        }
        ... on DatoCmsVideo {
          id
          video {
            url
            title
          }
        }
      }
    }
  }
`

export default Post
// "id": "DatoCmsArticle-5202530-en"
