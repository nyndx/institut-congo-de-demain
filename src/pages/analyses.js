import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import { slug } from "../utils"

const Subjects = ({ data }) => {
  const { articles } = data

  const s = articles.edges.flatMap(({ node: a }) =>
    a.subcategory.map(i => i.tag)
  )

  const subs = [...new Set(s)]

  return (
    <Layout>
      <SEO title="Analyses"></SEO>
      <div className="mt-8 md:mt-10">
        <h1 className="pb-4 text-lg font-medium tracking-wide text-blue-400 uppercase border-b-2 border-gray-200">
          Sous-Sujets
        </h1>
        <div>
          {!articles.edges.length && (
            <p className="mt-20 text-2xl text-center text-gray-600">
              Pas d'articles pour le moment, revenez plus tard!
            </p>
          )}
          {subs.map(s => (
            <div key={s} className="mt-8">
              <h1 className="mb-0 text-gray-600 capitalize ">{s}</h1>
              <div className="max-w-3xl lg:grid lg:grid-cols-2 lg:gap-6">
                {articles.edges.map(({ node: article }) => {
                  return article.subcategory.map(sub => {
                    const yes = sub.tag.toLowerCase() === s.toLowerCase()
                    return (
                      yes && (
                        <article key={article.id} className="py-6 space-y-2 ">
                          <div className="h-full px-4 py-6 space-y-2 bg-gray-200 rounded-lg ">
                            <div className="space-y-6">
                              <h2 className="mb-4 text-xl md:text-2xl">
                                <Link
                                  to={`/analyses/${slug(
                                    article.category.tag
                                  )}/${slug(article.slug)}`}
                                >
                                  {article.title}
                                </Link>
                              </h2>
                              <Link
                                to={`/analyses/${slug(
                                  article.category.tag
                                )}/${slug(article.slug)}`}
                              >
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: article.excerpt,
                                  }}
                                ></p>
                              </Link>

                              <p className="text-base font-medium leading-6 text-gray-700 hover:text-gray-800 group">
                                <Link
                                  to={`/analyses/${slug(
                                    article.category.tag
                                  )}/${slug(article.slug)}`}
                                >
                                  <span className="flex items-center hover:text-blue-500 ">
                                    <span>Read more </span>
                                    <span className="ml-2">&#8594;</span>
                                  </span>
                                </Link>
                              </p>
                            </div>
                          </div>
                        </article>
                      )
                    )
                  })
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Subjects {
    articles: allDatoCmsArticle(
      sort: { fields: publicationdate, order: DESC }
    ) {
      edges {
        node {
          title
          excerpt
          slug
          id
          publicationdate
          category {
            tag
          }
          subcategory {
            id
            tag
          }
        }
      }
    }
  }
`

export default Subjects
