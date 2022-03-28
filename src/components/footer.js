import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      &copy; {new Date().getFullYear()} <a href="/">Ash Napier</a> &mdash;
      Built with <a href="https://contentful.com/">Contentful</a> and{' '}
      <a href="https://gatsbyjs.com">Gatsby</a> &middot;{' '}
      <a href="https://github.com/ash-napier/defensive-stance">Source</a>
    </div>
  </Container>
)

export default Footer
