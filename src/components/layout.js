import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from './navbar'
import './styles.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Gatsby site' },
            { name: 'keywords', content: 'gatsby, testing' },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Navbar siteTitle={data.site.siteMetadata.title}></Navbar>
        <div className="container">
          <div>{children}</div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
