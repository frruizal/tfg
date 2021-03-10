import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Img from 'gatsby-image'
/* FORMA 1
//consulta
export const query = graphql`
  query {
    allNodeArticle {
        edges {
          node {
            title
            body {
              value
              format
              processed
            }
            id
          }
        }
      }
    }
` 
//publicar el titulo y los datos
const PaginaArticulos =({data}) => (
    <div>
        <h1>{ data.allNodeArticle.edges[0].node.title }</h1>
        {data.allNodeArticle.edges[0].node.body.value}
    </div>
)
export default PaginaArticulos
*/

//FORMA2 static queryç
const PaginaArticulos =({data}) => (
<StaticQuery
    query={graphql`
      query {
        allNodeArticle {
    edges {
      node {
        title
        body {
          value
        }
        relationships {
          field_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }}
    `}
    render={data => (

    <div>
        <h1>{ data.allNodeArticle.edges[0].node.title }</h1>
        <div style={{ maxWidth: `900px`, marginBottom: `1.45rem`, width: `100%` }}>
            <Img fluid={ data.allNodeArticle.edges[0].node.relationships.field_image.localFile.childImageSharp.fluid } />
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.allNodeArticle.edges[0].node.body.value.split(' ').splice(0, 50).join(' ') + '...' }}></div>
    </div>

    )}

    /*{data.allNodeArticle.edges.map(edge => (
        <>
            <h1>{ edge.node.title }</h1>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, width: `100%` }}>
                <Img fluid={ edge.node.relationships.field_image.localFile.childImageSharp.fluid } />
            </div>

        </>
    ))}*/
  />)


  export default PaginaArticulos

//la siguiente linea dangerouslySetInnerHTML es para conservar el estilo tal cual sale en Drupal