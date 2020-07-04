import { useStaticQuery, graphql } from "gatsby"

const useSubnav = () => {
  const { categories } = useStaticQuery(graphql`
    query SubNav {
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
  return categories.edges.map(category => category.node.tag).sort()
}

export default useSubnav
