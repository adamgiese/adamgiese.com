import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'
import Nav from 'components/Nav'

import './app.css'

function App() {
  return (
    <Root>
      <Nav />
      <div className="content">
        <Routes />
      </div>
    </Root>
  )
}

export default App
