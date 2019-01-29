import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'

import './app.css'

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/writings">Writing</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/speaking">Speaking</Link>
        {/*<Link to="/blog">Blog</Link>*/}
      </nav>
      <div className="content">
        <Routes />
      </div>
    </Root>
  )
}

export default App
