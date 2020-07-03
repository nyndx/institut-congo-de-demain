import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { format } from "date-fns"
import ReactPlayer from "react-player"
import { HelmetDatoCms } from "gatsby-source-datocms"

const Post = ({ data }) => {
  const author = data.datoCmsArticle.author
  const category = data.datoCmsArticle.category
  const content = data.datoCmsArticle.content
  const date = data.datoCmsArticle.publicationdate
  const slug = data.datoCmsArticle.slug
  const title = data.datoCmsArticle.title

  return (
    <Layout>
      <article className="mt-8 md:mt-10">
        <HelmetDatoCms seo={data.datoCmsArticle.seoMetaTags}></HelmetDatoCms>
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
                    className="flex justify-center m-0 mr-4 space-x-8"
                    key={author.id}
                  >
                    <li className="flex items-center space-x-2">
                      <img
                        src={author.image.url}
                        alt={author.image.alt}
                        className="w-6 h-6 m-0 border-2 rounded-full "
                      />
                      <p className="m-0 text-sm font-medium leading-5 whitespace-no-wrap">
                        {author.name}
                      </p>
                    </li>
                  </ul>
                ))}
            </div>
          </div>
        </header>
        <div>
          <div className="mt-8 md:mt-10 prose">
            {content.map(block => (
              <div key={block.id}>
                {block.model.apiKey === "text" && (
                  <div dangerouslySetInnerHTML={{ __html: block.text }}></div>
                )}
                {block.model.apiKey === "quote" && (
                  <figure>
                    <blockquote>
                      <p dangerouslySetInnerHTML={{ __html: block.quote }}></p>
                    </blockquote>
                    <figcaption className="mr-8 text-right">
                      &mdash;
                      <span
                        dangerouslySetInnerHTML={{ __html: block.author }}
                      ></span>
                    </figcaption>
                  </figure>
                )}
                {block.model.apiKey === "text_image" && (
                  <div className="max-w-xl mx-auto">
                    <Img fluid={block.image.fluid} alt={block.image.alt} />
                    <p>{block.image.text}</p>
                  </div>
                )}
                {block.model.apiKey === "video" && (
                  <div className="flex flex-col items-center justify-center">
                    <ReactPlayer controls url={block.video.url} light />
                    <p className="max-w-lg mt-4">{block.video.title}</p>
                  </div>
                )}
                {block.model.apiKey === "image" && (
                  <div className="max-w-xl mx-auto rich-text">
                    <Img fluid={block.image.fluid} alt={block.image.alt} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query postQuery($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      title
      slug
      id
      publicationdate
      author {
        id
        name
        image {
          alt
          url
        }
      }
      model {
        apiKey
      }
      category {
        id
        tag
      }
      content {
        ... on DatoCmsText {
          id
          text
          model {
            apiKey
          }
        }
        ... on DatoCmsImage {
          id
          image {
            url
            title
            alt
            fluid(maxWidth: 400, imgixParams: { auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsQuote {
          id
          author
          quote
          model {
            apiKey
          }
        }
        ... on DatoCmsTextImage {
          id
          text
          image {
            alt
            url
            title
            fluid(maxWidth: 400, imgixParams: { auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          model {
            apiKey
          }
        }
        ... on DatoCmsVideo {
          id
          video {
            url
            title
            height
            width
            provider
            thumbnailUrl
          }
          model {
            apiKey
          }
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`

export default Post
