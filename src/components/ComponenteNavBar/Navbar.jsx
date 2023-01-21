import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Link,NavLink } from 'react-router-dom'
import './Navbar.css'
import 'animate.css';


const Navbar = () => {
  return (
    <nav className='navbar d-flex flex-column bg-dark sticky-top'>
      <section className='d-flex justify-content-around w-100'>
        <p></p>
        <NavLink to='/' className='d-flex flex-row nav-link animate__animated animate__bounce'><h1 className='text-warning logo'>Phone</h1><h1 className='text-white logo'>Max</h1></NavLink>
        <Link to='/cart' className='btn d-flex align-items-center' id='btn-car'><CartWidget css='car' cssCount='car m-0 ms-1'/></Link> 
      </section>
      <div className="w-100">
        <ul className='navbar-nav d-flex flex-row justify-content-center'>
          <li className='nav-item mx-3'><NavLink to='/' className='nav-url'>INICIO</NavLink></li>
          <li className='nav-item mx-3'><NavLink to='/categoria/celulares' className='nav-url d-flex align-items-center justify-content-center'>CELULARES<FontAwesomeIcon icon={faChevronDown} className='ms-2 chevron-down' /></NavLink>
            <ul className='bg-dark'>
              <li className='nav-item d-flex flex-column align-items-center h-100 w-100 my-2'><NavLink to='/categoria/samsung' className='nav-url'>SAMSUNG</NavLink></li>
              <li className='nav-item d-flex flex-column align-items-center h-100 w-100 my-2'><NavLink to='/categoria/xiaomi' className='nav-url'>XIAOMI</NavLink></li>
              <li className='nav-item d-flex flex-column align-items-center h-100 w-100 my-2'><NavLink to='/categoria/apple' className='nav-url'>IPHONE</NavLink></li>
            </ul>
          </li>
          <li className='nav-item mx-3'><NavLink to='/categoria/accesorios' className='nav-url d-flex align-items-center justify-content-center'>ACCESORIOS<FontAwesomeIcon icon={faChevronDown} className='ms-2 chevron-down' /></NavLink>
            <ul className='bg-dark'>
              <li className='nav-item d-flex flex-column align-items-center h-100 w-100 my-2'><NavLink to='/categoria/apple' className='nav-url'>HUAWEI</NavLink></li>
              <li className='nav-item d-flex flex-column align-items-center h-100 w-100 my-2'><NavLink to='/categoria/samsung' className='nav-url'>SAMSUNG</NavLink></li>
              <li className='nav-item d-flex flex-column align-items-center h-100 w-100 my-2'><NavLink to='/categoria/xiaomi' className='nav-url'>XIAOMI</NavLink></li>
              <li className='nav-item d-flex flex-column align-items-center h-100 w-100 my-2'><NavLink to='/categoria/apple' className='nav-url'>APPLE</NavLink></li>
            </ul>
          </li>
          <li className='nav-item mx-3'><NavLink to='/categoria/tablets' className='nav-url d-flex align-items-center justify-content-center'>TABLETS<FontAwesomeIcon icon={faChevronDown} className='ms-2 chevron-down' /></NavLink>
            <ul className='bg-dark'>
              <li className='nav-item d-flex flex-column align-items-center h-100 w-100 my-2'><NavLink to='/categoria/apple' className='nav-url'>IPAD</NavLink></li>
            </ul>
          </li>
          <li className='nav-item mx-3'><NavLink to='/categoria/computadores' className='nav-url d-flex align-items-center justify-content-center'>COMPUTADORES<FontAwesomeIcon icon={faChevronDown} className='ms-2 chevron-down' /></NavLink>
            <ul className='bg-dark'>
              <li className='nav-item d-flex flex-column align-items-center h-100 w-100 my-2'><NavLink to='/categoria/apple' className='nav-url'>APPLE MAC</NavLink></li>
            </ul>
          </li>
          <li className='nav-item mx-3'><NavLink to='/categoria/videojuegos' className='nav-url d-flex align-items-center justify-content-center'>VIDEOJUEGOS</NavLink>
          </li>
        </ul>
      </div>
    </nav>
    
  )
}

export default Navbar
