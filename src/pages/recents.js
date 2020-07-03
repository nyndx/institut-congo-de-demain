import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { slug } from "../utils"
import { format } from "date-fns"

import { Link, graphql } from "gatsby"

const Analyses = ({ data }) => {
  return (
    <Layout>
      <SEO title="Recents"></SEO>
      <div className="mt-8 md:mt-10">
        <h1 className="pb-4 text-lg font-medium tracking-wide text-blue-400 uppercase border-b-2 border-gray-200">
          Articles recents
        </h1>

        {!data.allDatoCmsArticle.edges.length && (
          <p className="mt-20 text-2xl text-center text-gray-500">
            Pas d'articles pour le moment, revenez plus tard!
          </p>
        )}
        <div className="max-w-3xl mt-8">
          {data.allDatoCmsArticle.edges.map(({ node: article }) => (
            <article key={article.id} className="py-8 space-y-2">
              <div className="h-full px-4 py-6 space-y-2 bg-gray-200 rounded-lg">
                <time
                  dateTime={article.publicationdate}
                  className="mt-4 leading-6 text-gray-500"
                >
                  {format(new Date(article.publicationdate), "MMMM d, y")}
                </time>
                <div className="pt-2 space-y-6">
                  <h2 className="mb-4 text-xl md:text-2xl">
                    <Link
                      to={`/analyses/${slug(article.category.tag)}/${slug(
                        article.slug
                      )}`}
                    >
                      {article.title}
                    </Link>
                  </h2>

                  <p
                    dangerouslySetInnerHTML={{
                      __html: article.excerpt,
                    }}
                  ></p>

                  <p className="text-base font-medium leading-6 text-gray-700 hover:text-gray-800 group">
                    <Link
                      to={`/analyses/${slug(article.category.tag)}/${slug(
                        article.slug
                      )}`}
                    >
                      <span className="flex items-center hover:text-blue-500">
                        <span className="p-0 py-2">Read more </span>
                        <span className="p-0 py-2 ml-2">&#8594;</span>
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allDatoCmsArticle(sort: { fields: publicationdate, order: DESC }) {
      edges {
        node {
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

export default Analyses
