import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'

const Root: React.FC = () => (
  <>
    <Header />

    <main className="main-content">
      <Outlet />
    </main>

    <Footer />
  </>
)

export default Root
