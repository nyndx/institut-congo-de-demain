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
  const categoryTemplate = path.resolve("./src/templates/category.js")
  const authorTemplate = path.resolve("./src/templates/author.js")
  const subcategoryTemplate = path.resolve("./src/templates/subcategory.js")

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

      authors: allDatoCmsAuthor {
        edges {
          node {
            name
            id
          }
        }
      }

      subcategories: allDatoCmsSubcategory {
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
  const authors = result.data.authors.edges
  const subcategories = result.data.subcategories.edges

  subcategories.forEach(({ node: s }) => {
    createPage({
      path: `/sous-sujet/${slugify(s.tag, { replacement: "-", lower: true })}`,
      component: subcategoryTemplate,
      context: {
        id: s.id,
        tag: s.tag,
      },
    })
  })

  authors.forEach(({ node: author }) => {
    createPage({
      path: `${slugify(author.name, {
        replacement: "-",
        lower: true,
      })}`,
      component: authorTemplate,
      context: {
        id: author.id,
        name: author.name,
      },
    })
  })

  categories.forEach(({ node: category }) => {
    createPage({
      path: `/analyses/${slugify(category.tag, {
        replacement: "-",
        lower: true,
      })}`,
      component: categoryTemplate,
      context: {
        id: category.id,
        title: category.tag,
      },
    })
  })

  posts.forEach(({ node: post }) => {
    createPage({
      path: `/analyses/${slugify(post.category.tag, {
        replacement: "-",
        lower: true,
      })}/${slugify(post.slug, { replacement: "-", lower: true })}`,
      component: postTemplate,
      context: {
        id: post.id,
      },
    })
  })
}
