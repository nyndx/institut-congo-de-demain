/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

const slugify = require("slugify")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/post.js")

  const result = await graphql(`
    query {
      allDatoCmsArticle {
        edges {
          node {
            slug
            id
            category {
              tag
            }
          }
        }
      }
    }
  `)

  const posts = result.data.allDatoCmsArticle.edges

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
