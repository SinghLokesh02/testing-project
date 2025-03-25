import React from 'react'
import { useSelector } from 'react-redux'

const Cartpage = () => {
    const cart = useSelector(state => state.cart.items)
    console.log(cart)
  return (
    <div>
        <h1>length = {cart.length}</h1>
      <h1>Cart</h1>
    </div>
  )
}

export default Cartpage
