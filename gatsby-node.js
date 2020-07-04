/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

const slugify = require("slugify")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("./src/templates/post.js")
  const categoriesTemplate = path.resolve("./src/templates/categories.js")

  const result = await graphql(`
    query {
      articles: allDatoCmsArticle {
        edges {
          node {
            slug
            id
            category {
              tag
            }
            subcategory {
              tag
              id
            }
          }
        }
      }

      categories: allDatoCmsCategory {
        edges {
          node {
            id
            tag
          }
        }
      }
    }
  `)

  const posts = result.data.articles.edges
  const categories = result.data.categories.edges

  categories.forEach(({ node: category }) => {
    createPage({
      path: `/analyses/${slugify(category.tag, {
        replacement: "-",
        lower: true,
      })}`,
      component: categoriesTemplate,
      context: {
        id: category.id,
        title: category.tag,
      },
    })
  })

  posts.forEach(({ node: post }) => {
    post.subcategory.forEach(item => {
      createPage({
        path: `/analyses/${slugify(post.category.tag, {
          replacement: "-",
          lower: true,
        })}/${slugify(item.tag, {
          replacement: "-",
          lower: true,
        })}/${slugify(post.slug, { replacement: "-", lower: true })}`,
        component: postTemplate,
        context: {
          id: post.id,
        },
      })
    })
  })
}
