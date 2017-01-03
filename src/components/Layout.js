import React, { Component } from 'react'
import { Link } from 'react-router'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render () {
    return (
      <div>
        <h1>The Donut Experiment</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/menu'>Menu</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/locations'>Locations</Link>
            </li>
          </ul>
        </nav>
        <main>
          {this.props.children}
        </main>
        <footer>
          <p>&copy; 2017 The Majestic That. Built with &hearts; at The Iron Yard, in St. Petersburg, FL.</p>
        </footer>
      </div>
    )
  }
}

export default Layout
