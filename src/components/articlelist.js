import React from "react"
import { Link } from "gatsby"
import { slug } from "../utils"
import { format } from "date-fns"

const ArticleList = ({ data, category }) => {
  return (
    <div className="mt-8 md:mt-10">
      <div className="flex justify-between pb-4 border-b-2 border-gray-200">
        <h1 className="text-lg font-medium tracking-wide text-blue-400 uppercase">
          {category}
        </h1>
        <p className="hidden text-sm font-semibold text-blue-400 md:block">
          {data.allDatoCmsArticle.edges.length} Article(s)
        </p>
      </div>
      {!data.allDatoCmsArticle.edges.length && (
        <p className="mt-20 text-2xl text-center text-gray-600">
          Pas d'articles pour le moment, revenez plus tard!
        </p>
      )}

      <div className="max-w-3xl mt-8">
        {data.allDatoCmsArticle.edges.map(({ node: article }) => (
          <article key={article.id} className="py-8 space-y-2">
            <time
              dateTime={article.publicationdate}
              className="mt-4 leading-6 text-gray-500"
            >
              {format(new Date(article.publicationdate), "MMMM d, y")}
            </time>
            <div className="space-y-6">
              <h2 className="mb-4 text-xl font-medium text-gray-700 md:text-2xl">
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

              <p className="text-base font-medium leading-6 text-gray-700 hover:text-gray-800 group">
                <Link
                  to={`/analyses/${slug(article.category.tag)}/${slug(
                    article.slug
                  )}`}
                >
                  <span className="flex items-center ">
                    <span>Read more </span>
                    <span className="ml-2 group-hover:text-blue-500">
                      &#8594;
                    </span>
                  </span>
                </Link>
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default ArticleList
