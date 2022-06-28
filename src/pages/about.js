import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const about = () => {
  return (
    <Layout pageTitle="About">
        <p>Portfolio content</p>
        <StaticImage alt="pebbles" src="../images/DSC_0693.jpg" className="mx-64"/>

    </Layout>
  )
}

export default about