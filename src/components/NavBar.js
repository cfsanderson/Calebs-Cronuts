import React, { Component } from 'react'
import { Link } from 'react-router'

class NavBar extends Component {

  render () {
    return (
      <div className='home-navbar'>
        <nav>
          <ul className='navbar'>
            <li>
              <Link to='/menu'>Menu</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li className='main-logo'>
              <Link className='main-logo' to='/' />
            </li>
            <li>
              <Link to='/locations'>Locations</Link>
            </li>
            <li>
              <Link to='/orders'>Order Online</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar
