import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'


const Layout = ({pageTitle, children}) => {

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }`)
  return (
    <div className="min-h-screen px-12">
        <title>{pageTitle} || {data.site.siteMetadata.title}</title>
        <header>{data.site.siteMetadata.title}</header>
        <nav className="bg-white container mx-auto flex justify-between">
            <ul className="flex">
                <li className="p-8 underline"><Link to="/">Home</Link></li>
                <li className="p-8 underline"><Link to="/projects">Projects</Link></li>
                <li className="p-8 underline"><Link to="/about">About</Link></li>
            </ul>
        </nav>
        <main className="container mx-auto">
            <h1 className="text-gray-800 text-l w-80 font-bold py-2 bg-white title text-gray-800">{pageTitle}</h1>
            {children}
        </main>
    </div>
  )
}

export default Layout