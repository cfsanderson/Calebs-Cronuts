import React, { Component } from 'react'

const NavBar = (props) => {
  return (
    <div className='footer'>
      <footer>
        <h2>As seen in</h2>
        <div className='footer-logos'>
          <ul>
            <li><img src='./src/images/logo-sainsbury-magazine.png' /></li>
            <li><img src='./src/images/logo-sarasota-mag.png' /></li>
            <li><img src='./sßrc/images/logo-sunday-post.png' /></li>
            <li><img src='./src/images/logo-tampa-bay-times.png' /></li>
            <li><img src='./src/images/logo-toronto-star.png' /></li>
            <li><img src='./src/images/logo-visit-florida.png' /></li>
            <li><img src='./src/images/logo-wall-street-journal.png' /></li>
          </ul>
        </div>
        <p>&copy; 2017 Caleb's Cronuts. Built with &hearts; at The Iron Yard, in St. Petersburg, FL.</p>
      </footer>
    </div>
  )
}

export default NavBar
