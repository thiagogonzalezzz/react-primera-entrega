import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import CategoryList from '../CategoryList/CategoryList'
import "./NavBar.css"

export default function NavBar() {
  return (
    <div className='header-navbar'>
        <CategoryList />
        <CartWidget />
    </div>
  )
}
