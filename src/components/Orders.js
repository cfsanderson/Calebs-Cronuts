import React, { Component } from 'react'
import { Link } from 'react-router'
import data from '../data.json'

class Orders extends Component {

  constructor () {
    super()
    this.state = {
      cart: [
        {
          name: 'Black - Hot or Iced',
          price: 200,
          quantity: 2
        },
        {
          name: 'Triple Chocolate',
          price: 135,
          quantity: 1
        },
        {
          name: 'Double Chocolate',
          price: 135,
          quantity: 2
        }
      ]
    }
  }

  cartTotal () {
    return this.state.cart.reduce((sum, item) => {
      return sum + item.price * item.quantity
    }, 0)
  }

  formatUSD (n) {
    return `$${(n / 100).toFixed(2)}`
  }

  adddToCart (item) {
    this.setState({
      cart: [
        ...this.state.cart,
        item
      ]
    })
  }

  render () {
    let cartRows
    if (this.state.cart.length > 0) {
      cartRows = this.state.cart.map((item, i) => {
        return (
          <tr key={i}>
            <td className='item'>{item.name}</td>
            <td>x{item.quantity}</td>
            <td>{this.formatUSD(item.price * item.quantity)}</td>
          </tr>
        )
      })
      cartRows.push(<tr key='total'>
        <th className='item'>Total</th>
        <td />
        <td>{this.formatUSD(this.cartTotal())}</td>
      </tr>)
    } else {
      cartRows = <tr className='empty'>
        <td colSpan='3'><p>Your cart is empty.</p></td>
      </tr>
    }

    return (
      <div>
        <h2>Order Online</h2>
        <div className='cart'>
          <h3>Your Order</h3>
          <table>
            <tbody>
              {cartRows}
            </tbody>
          </table>
          <form>
            <button>Checkout</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Orders
