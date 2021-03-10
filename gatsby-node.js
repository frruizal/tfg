/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

/*Generar algunas paginas automaticamente
** Estamos escribiendo nuestra propia implementacion de la api crear paginas
** Gatsby usara esto para generar paginas para cada ID de nodo*/
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
    {
     allNodeArticle {
       edges {
         node {
           id
         }
       }
     }
    }
  `
    ).then(result => {
        result.data.allNodeArticle.edges.forEach(({ node }) => {
            createPage({
                path: node.id,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    id: node.id,
                },
            })
        })
    })
}

//pasamos el id como variable de contexto y nos permite consultar ese nodo especifico
//ahora los indices se vincularan a una vista completa de la publicacion