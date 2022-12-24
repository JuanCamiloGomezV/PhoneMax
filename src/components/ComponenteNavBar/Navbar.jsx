import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className='navbar d-flex flex-column bg-dark'>
        <section className='d-flex justify-content-around w-100'>
        <p></p>
        <a href="" className='d-flex flex-row nav-link'><h1 className='text-warning'>Phone</h1><h1 className='text-white'>Max</h1></a>
        <button className='btn d-flex align-items-center' id='btn-car'><CartWidget css='nav-link'></CartWidget><p className='nav-link m-0 ms-1'>0</p></button> 
        </section>
        <section className="w-100">
            <ul className='navbar-nav d-flex flex-row justify-content-center'>
                <li className='nav-item mx-3'><a className='nav-link' href="">INICIO</a></li>
                <li className='nav-item mx-3'><a className='nav-link d-flex align-items-center justify-content-center' href="#">CELULARES<FontAwesomeIcon icon={faChevronDown} className='ms-2 chevron-down' /></a></li>
                <li className='nav-item mx-3'><a className='nav-link d-flex align-items-center justify-content-center' href="#">ACCESORIOS<FontAwesomeIcon icon={faChevronDown} className='ms-2 chevron-down' /></a></li>
                <li className='nav-item mx-3'><a className='nav-link d-flex align-items-center justify-content-center' href="#">TABLETS<FontAwesomeIcon icon={faChevronDown} className='ms-2 chevron-down' /></a></li>
                <li className='nav-item mx-3'><a className='nav-link d-flex align-items-center justify-content-center' href="#">COMPUTADORES<FontAwesomeIcon icon={faChevronDown} className='ms-2 chevron-down' /></a></li>
                <li className='nav-item mx-3'><a className='nav-link d-flex align-items-center justify-content-center' href="#">VIDEOJUEGOS<FontAwesomeIcon icon={faChevronDown} className='ms-2 chevron-down' /></a></li>
            </ul>
        </section>
    </nav>
  )
}

export default Navbar
