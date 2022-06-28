import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const Projects = ({data}) => {

  return (
    <Layout pageTitle="Projects">
        <ul>
            {
                data.allFile.nodes.map(node => (
                    <li key={node.name}>{node.name}</li>
                ))
            }
        </ul>
    </Layout>
  )
}

export const query = graphql`
query {
    allFile {
        nodes {
            name
        }
    }
}`

export default Projects