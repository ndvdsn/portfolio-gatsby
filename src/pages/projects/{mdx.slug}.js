import React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'


const Project = ({data}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
        <p>{data.mdx.frontmatter.date}</p>
        <h4>{data.mdx.frontmatter.client}</h4>
        {/* add a ternary operator to display a link to deployed app if published == true */}
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
        <h4>{data.mdx.frontmatter.technologies}</h4>
    </Layout>    
  )
}

export default Project

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        public
        client
        technologies
      }
      body
    }
  }
`