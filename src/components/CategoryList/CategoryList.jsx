import React from 'react'
import "./CategoryList.css"

export default function CategoryList() {
  return (
    <nav>
        <ul className='cat-list'>
            <li>
                <a href="#">Productos</a>
            </li>
            <li>
                <a href="#">Servicios</a>
            </li>
            <li>
                <a href="#">Quienes somos</a>
            </li>
            <li>
                <a href="#">Contacto</a>
            </li>
        </ul>
    </nav>
  )
}
