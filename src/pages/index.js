import React from 'react'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1 className="title">Gatsby Header</h1>
    <p className="subtitle">
      This is a Gatsby test site + Netlify functions + Bulma CSS.
    </p>
    <div className="columns">
      <div className="column is-one-fifth"></div>
      <div className="field">
        <div className="control">
          <input
            className="input is-info is-rounded"
            type="text"
            placeholder="Name"
          />
        </div>
      </div>
      <a className="button is-info is-rounded">Send</a>
    </div>
  </Layout>
)

export default IndexPage
