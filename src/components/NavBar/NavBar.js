import React from 'react'
import { NavLink } from "react-router-dom";
import './NavBar.scss'

function NavBar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <ul className="nav-links">
                    <NavLink activeClassName="nav-link-active" className="nav-link" to="/home">
                        <li className="nav-item">Home</li>
                    </NavLink>
                    <NavLink activeClassName="nav-link-active" className="nav-link" to="/fashion">
                        <li className="nav-item">Fashion</li>
                    </NavLink>
                    <NavLink activeClassName="nav-link-active" className="nav-link" to="/fitness">
                        <li className="nav-item">Fitness</li>
                    </NavLink>
                    <NavLink activeClassName="nav-link-active" className="nav-link" to="/nature">
                        <li className="nav-item">Nature</li>
                    </NavLink>
                    <NavLink activeClassName="nav-link-active" className="nav-link" to="/jewellery">
                        <li className="nav-item">Jewellery</li>
                    </NavLink>
                    <NavLink activeClassName="nav-link-active" className="nav-link" to="/about">
                        <li className="nav-item">About</li>
                    </NavLink>
                    <NavLink activeClassName="nav-link-active" className="nav-link" to="/contact">
                        <li className="nav-item">Contact</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
