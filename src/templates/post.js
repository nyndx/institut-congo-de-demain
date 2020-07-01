import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { format } from "date-fns"

const Post = ({ data }) => {
  const author = data.datoCmsArticle.author
  const category = data.datoCmsArticle.category
  const content = data.datoCmsArticle.content
  const date = data.datoCmsArticle.publicationdate
  const slug = data.datoCmsArticle.slug
  const title = data.datoCmsArticle.title

  // console.log(author)
  // console.log(category)
  // console.log(content)
  // console.log(date)
  // console.log(slug)
  // console.log(title)

  return (
    <Layout>
      <SEO title=""></SEO>
      <article className="mt-8 md:mt-10">
        <header className="pt-6 pb-10 space-y-4 text-center border-b border-gray-200">
          <time dateTime={date} className="mt-4 leading-6 text-gray-500">
            {format(new Date(date), "EEEE, MMMM d, y")}
          </time>
          <div className="space-y-8">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-700 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {title}
            </h1>
            <div className="flex justify-center">
              {Array.isArray(author) &&
                author.map(author => (
                  <ul
                    className="flex justify-center mr-4 space-x-8"
                    key={author.id}
                  >
                    <li className="flex items-center space-x-2">
                      <img
                        src={author.image.url}
                        alt={author.image.alt}
                        className="w-10 h-10 border-2 rounded-full"
                      />
                      <p className="text-sm font-medium leading-5 whitespace-no-wrap">
                        {author.name}
                      </p>
                    </li>
                  </ul>
                ))}
              {/* {
                <ul
                  className="flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8"
                  key={author.id}
                >
                  <li className="flex items-center space-x-2">
                    <img
                      src={author.image.url}
                      alt={author.image.alt}
                      className="w-10 h-10 border-2 rounded-full"
                    />
                    <p className="text-sm font-medium leading-5 whitespace-no-wrap">
                      {author.name}
                    </p>
                  </li>
                </ul>
              } */}
            </div>
          </div>
        </header>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query postQuery($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
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
      publicationdate
      author {
        id
        name
        image {
          alt
          url
        }
      }
    }
  }
`

export default Post
// "id": "DatoCmsArticle-5202530-en"
