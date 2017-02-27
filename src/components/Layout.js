import React, { Component } from 'react'
import NavBar from './Navbar'
import Footer from './Footer'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render () {
    return (
      <div className='layout'>
        <NavBar />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default Layout
