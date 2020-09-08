import React from 'react'
import { Link } from 'gatsby'

import './styles.scss'

const Navbar = ({ siteTitle }) => (
  <nav
    className="navbar is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div id="navBar" className="navbar-menu">
      <div className="navbar-start">
        <Link to="/" className="navbar-item">
          {siteTitle}
        </Link>

        <Link to="/about" className="navbar-item">
          About
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
