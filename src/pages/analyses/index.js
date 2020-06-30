import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { slug } from "../../utils"

import { Link, graphql } from "gatsby"

const Analyses = ({ data }) => {
  return (
    <Layout>
      <SEO title="Analyses"></SEO>
      <div className="mt-8 md:mt-10">
        <h1 className="text-lg font-medium tracking-wide text-blue-400 uppercase">
          Articles recents
        </h1>

        {!data.allDatoCmsArticle.edges.length && (
          <p className="mt-20 text-2xl text-center text-gray-600">
            Pas d'articles pour le moment, revenez plus tard!
          </p>
        )}
        <div className="max-w-3xl mt-8">
          {data.allDatoCmsArticle.edges.map(({ node: article }) => (
            <div key={article.id} className="mb-8">
              <h2 className="mb-4 font-medium text-gray-600 textlg md:text-xl hover:text-gray-900">
                <Link
                  to={`/analyses/${slug(article.category.tag)}/${slug(
                    article.slug
                  )}`}
                >
                  {article.title}
                </Link>
              </h2>

              <p>
                <Link
                  to={`/analyses/${slug(article.category.tag)}/${slug(
                    article.slug
                  )}`}
                >
                  {article.excerpt}
                </Link>
              </p>
              <p className="mt-4 text-gray-500">by - {article.author.name}</p>
            </div>
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

export default Analyses
