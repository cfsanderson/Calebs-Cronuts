import React, { Component } from 'react'
import MenuItem from './MenuItem'

class MenuSection extends Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    items: React.PropTypes.array.isRequired
  }

  render () {
    const items = this.props.items.map((item, i) => {
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
