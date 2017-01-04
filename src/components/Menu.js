import React, { Component } from 'react'
import MenuSection from './MenuSection'
import menuItems from '../menu.json'

class Menu extends Component {

  render () {
    const categories = menuItems.categories.map((category, i) => {
      return <li key={i}>{category.name}</li>
    })

    const sections = menuItems.categories.map((category, i) => {
      return <MenuSection name={category.name} items={category.items} key={i} />
    })

    return (
      <div>
        <h2>Our Menu</h2>
        <section className='menu-categories'>
          <ul>
            {categories}
          </ul>
        </section>
        {sections}
      </div>
    )
  }
}

export default Menu
