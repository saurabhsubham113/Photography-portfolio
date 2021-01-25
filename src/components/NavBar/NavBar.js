import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import './NavBar.scss'

function NavBar() {

    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const list = document.getElementsByClassName('nav-item');
        console.log(isActive);
    }, [isActive])


    const navHandle = (e) => {
        setIsActive(prevItem => (
            !isActive
        ))
    }

    document.getElementsByClassName('nav-item')
    return (
        <div className="NavBar">
            <nav className="nav ">
                <div className="logo">
                    <NavLink activeClassName="nav-link-active" className="nav-link" to="/home">
                        ANKIT RAJ
                    </NavLink>
                </div>
                <ul className={isActive ? "nav-links nav-active" : "nav-links"}>
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
                <div onClick={navHandle} className="burger">
                    <div className={isActive ? "toggle-line-1" : "line-1"}></div>
                    <div className={isActive ? "toggle-line-2" : "line-2"}></div>
                    <div className={isActive ? "toggle-line-3" : "line-3"}></div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
