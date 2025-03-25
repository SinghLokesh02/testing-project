import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 bg-gray-200 items-center text-xl '>
      <h1>logo</h1>
        <nav className=''>
            <ul className='flex space-x-4 '>
            <li><Link to= "/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
