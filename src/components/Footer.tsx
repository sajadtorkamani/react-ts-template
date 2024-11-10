import React from 'react'
import { Container } from 'react-bootstrap'

import { APP_NAME, GITHUB_REPO_URL } from '../lib/constants'

const Footer: React.FC = () => (
  <footer className="site-footer bg-light p-3 border-top text-muted">
    <Container className="d-flex justify-content-between gap-3">
      <div>
        {APP_NAME} &copy; {new Date().getFullYear()}
      </div>

      {GITHUB_REPO_URL && (
        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          className="text-inherit"
          rel="noreferrer"
        >
          View on GitHub
        </a>
      )}
    </Container>
  </footer>
)

export default Footer
