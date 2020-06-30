import React from "react"
import { Link } from "gatsby"
import { slug } from "../utils"

const ArticleList = ({ data, category }) => {
  return (
    <div className="mt-8 md:mt-10">
      <div className="flex justify-between">
        <h1 className="text-lg font-medium tracking-wide text-blue-400 uppercase">
          {category}
        </h1>
        <span className="italic font-light text-blue-400">
          {data.allDatoCmsArticle.edges.length} Article(s)
        </span>
      </div>
      {!data.allDatoCmsArticle.edges.length && (
        <p className="mt-20 text-2xl text-center text-gray-600">
          Pas d'articles pour le moment, revenez plus tard!
        </p>
      )}

      <div className="max-w-3xl mt-8">
        {data.allDatoCmsArticle.edges.map(({ node: article }) => (
          <div key={article.id} className="mb-8">
            <h2 className="mb-4 text-lg font-medium text-gray-600 md:text-xl hover:text-gray-900">
              <Link
                to={`/analyses/${slug(article.category.tag)}/${slug(
                  article.slug
                )}`}
              >
                {article.title}
              </Link>
            </h2>

            <Link
              to={`/analyses/${slug(article.category.tag)}/${slug(
                article.slug
              )}`}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: article.excerpt,
                }}
              ></p>
            </Link>
            <p className="mt-4 text-gray-500">by - {article.author.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticleList
