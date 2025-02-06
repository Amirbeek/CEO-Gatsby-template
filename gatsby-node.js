const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/blog/'+ node.frontmatter.slug,
            component: path.resolve('./src/templates/project-details.js'),
            context: { slug: node.frontmatter.slug }
        })
    })

}
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /bad-module/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}