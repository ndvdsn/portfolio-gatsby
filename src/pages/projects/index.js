import React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'


const Projects = ({data}) => {

  return (
    <Layout pageTitle="Projects">
        <ul>
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>
                          <Link to={`/projects/${node.slug}`}>
                          {node.frontmatter.title}
                          </Link>
                          </h2>
                        <p>{node.frontmatter.date}</p>
                        {/* <MDXRenderer>
                            {node.body}
                        </MDXRenderer> */}
                    </article>
                ))
            }
        </ul>
    </Layout>
  )
}

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            public
            client
            technologies
          }
          id
          slug
        }
      }
}`

export default Projects