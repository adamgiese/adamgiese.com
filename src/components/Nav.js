import React from 'react'
import { Link } from '@reach/router'
import Octicon, { ThreeBars } from '@githubprimer/octicons-react'

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      navOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({navOpen: !this.state.navOpen});
  }

  render() {
    return (
      <>
        <button className='mainNavButton' onClick={this.toggleNav}>
          <Octicon size='medium'>
            <ThreeBars />
          </Octicon>
          Toggle Menu
        </button>
        <nav className={`mainNav ${this.state.navOpen ? 'open' : 'closed'}`}>
          <Link to="/">Home</Link>
          <Link to="/writings">Writing</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/speaking">Speaking</Link>
          {/*<Link to="/blog">Blog</Link>*/}
        </nav>
      </>
    );
  }
}

export default Nav;
