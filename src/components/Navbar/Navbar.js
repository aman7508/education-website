import React, { useState } from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
        <div className='toggle'>
            <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <nav className='navbar' id="home">
            <h3 className='logo'>Online <span className='logo2'>Learning</span><a><p className="pp text-light"><br></br>learn from the best</p></a></h3>
            <ul className="nav-links">

                <Link to="/" className='home'>
                    <li>Home</li>
                </Link>
                <Link to="/about" className='about'>
                    <li>About us</li>
                </Link>
                <Link to="/courses" className='courses'>
                    <li>Courses</li>
                </Link>
                <Link to="/contact" className='contact'>
                    <li>Contact us</li>
                </Link>
                <Link to="/login" className='login'>
                    <li>Login</li>
                </Link>
                <Link to="/project" className='project'>
                    <li>Project</li>
                </Link>
            </ul>
            <button className='mobile-menu-icon'>
            </button>
        </nav>
        </>
    )
}

export default Navbar;