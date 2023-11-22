import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <>
      <ul>
        <li><Link to="/home" >Home</Link></li>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </>
  )
}
