import React from 'react'
import CartWidget from './CartWidget'
import CategoryList from './CategoryList'

export default function NavBar() {
  return (
    <div>
        <CategoryList />
        <CartWidget />
    </div>
  )
}
