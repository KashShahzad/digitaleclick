import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import '../styles/custom.css'

const Header = () => (
  <header
    style={{
      background: `white`,
      marginBottom: `3rem`,
      
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        // maxWidth: 960,
        padding: `1.5rem 1.5rem`,
        display: "block",
      }}
    >
        <Link
          to="/"
          style={{
            color: `green`,
            fontWeight: 'bold',
            fontSize: '1.4rem',
            fontFamily: 'Poppins',
            textDecoration: `none`,
            float: 'left'
          }}
        >
          Digital eClick
        </Link>
        <Link
         to="/marketplace/"
         style={{
           color: `green`,
           fontFamily: 'Poppins',
           textDecoration: `none`,
           float: 'right'
         }}
        >marketplace</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
