import React, { useState } from 'react'
import CartIcon from '../CartIcon/CartIcon'
import "./CartWidget.css"

export default function CartWidget() {

  const [cartItems, setCartItems] =
  useState (3);

  return (
    <div>
        <CartIcon width={30} height={30}/>
        <span className='span-cart'>{cartItems}</span>
    </div>
  )
}
