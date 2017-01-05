import React, { Component } from 'react'
import MenuItem from './MenuItem'
import data from '../data.json'

class MenuSection extends Component {

  static propTypes = {
    params: React.PropTypes.object.isRequired,
    name: React.PropTypes.string.isRequired  /* missing from Jason's code */
  }

  render () {
    const category = data.menu.find(c => c.slug === this.props.params.slug)
    const items = category.items.map((item, i) => {
      return <MenuItem name={item.name} description={item.description} price={item.price} key={i} />
    })

    return (
      <section>
        <h3>{this.props.name}</h3>
        <table>
          <tbody>
            {items}
          </tbody>
        </table>
      </section>
    )
  }
}

export default MenuSection
