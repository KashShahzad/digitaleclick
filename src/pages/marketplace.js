import * as React from "react"
import { Link } from "gatsby"
import '../styles/custom.css'

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Marketplace" />
    <div style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding: `0 10rem`,
            color: `charcoal`,
            fontFamily: 'Poppins'
    }}>
    <h1>Coming Soon</h1>
    </div>
  </Layout>
)

export default SecondPage
