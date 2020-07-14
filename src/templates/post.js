import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { format } from "date-fns"
import ReactPlayer from "react-player"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { Link } from "gatsby"
import { slug } from "../utils"
import SEO from "../components/seo"

const Post = ({ data, location }) => {
  const author = data.datoCmsArticle.author
  const content = data.datoCmsArticle.content
  const date = data.datoCmsArticle.publicationdate
  const title = data.datoCmsArticle.title
  const sub = data.datoCmsArticle.subcategory

  return (
    <Layout>
      <article className="mt-8 md:mt-10">
        <SEO pathname={location.pathname} />
        <HelmetDatoCms seo={data.datoCmsArticle.seoMetaTags}></HelmetDatoCms>
        <header className="pt-6 pb-10 space-y-4 text-center border-b border-gray-200">
          <div className="flex flex-wrap justify-center mb-8 text-sm italic font-semibold text-blue-400 uppercase hover:text-blue-500">
            {sub.map(item => (
              <Link
                to={`/sous-sujet/${slug(item.tag, {
                  replacement: "-",
                  lower: true,
                })}`}
              >
                <p key={item.id} className="px-2">
                  # {item.tag}
                </p>
              </Link>
            ))}
          </div>

          <div className="space-y-8">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-700 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
              {title}
            </h1>
            <div className="flex flex-wrap justify-center">
              {Array.isArray(author) &&
                author.map(author => (
                  <ul
                    className="flex flex-wrap justify-center m-0 mr-4 space-x-8"
                    key={author.id}
                  >
                    <li className="flex items-center space-x-2 italic">
                      {author.image ? (
                        <img
                          src={author.image.url}
                          alt={author.image.alt}
                          className="w-6 h-6 m-0 border-2 rounded-full "
                        />
                      ) : (
                        <div>
                          <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            className="w-6 h-6 m-0 border-2 rounded-full"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      )}
                      <Link to={`/${slug(author.name)}`}>
                        <p className="m-0 text-sm font-medium leading-5 text-blue-400 whitespace-no-wrap hover:text-blue-500">
                          {author.name}
                        </p>
                      </Link>
                    </li>
                  </ul>
                ))}
            </div>
          </div>
        </header>
        <div>
          <div className="mt-8 md:mt-10 prose lg:prose-lg max-w-none">
            {content.map(block => (
              <div key={block.id}>
                {block.model.apiKey === "text" && (
                  <div dangerouslySetInnerHTML={{ __html: block.text }}></div>
                )}
                {block.model.apiKey === "quote" && (
                  <figure>
                    <blockquote className="">
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
        <div className="mt-16 italic text-blue-400 ">
          <div className="w-16 mb-2 border-4 border-blue-400"></div>
          <span class> Publié: </span>
          <time dateTime={date} className="mt-4 leading-6 text-gray-500">
            {format(new Date(date), "EEEE, MMMM d, y")}
          </time>
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
      subcategory {
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
