import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import Menu from './Menu'
import Contact from './Contact'
import Locations from './Locations'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/' component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/contact' component={Contact} />
        <Route path='/locations' component={Locations} />
      </Route>
    </Router>
  }
}

export default App
