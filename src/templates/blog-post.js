//plantilla para nuestras publicaciones
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'

export default ({ data }) => {
    const post = data.nodeArticle
    return (
        <Layout>
            <div>
                <h1>aa { post.title }</h1>
                <div style={{ maxWidth: `900px`, marginBottom: `1.45rem`, width: `100%` }}>
                    <Img fluid={ post.relationships.field_image.localFile.childImageSharp.fluid } />
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
            </div>
        </Layout>
    )
}

//consultamos solo por un nodo de articulo pasando una identificacion como argumento
//ahora podemos actualizar node js para usarlo al generar paginas

export const query = graphql`
  query($id: String!) {
    nodeArticle(id: { eq: $id }) {
      title
      body {
        value
      }
      created
      relationships {
        field_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400, quality: 10) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }`