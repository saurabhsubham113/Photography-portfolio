import React from 'react'
import './drawerToggle.scss'

function DrawerToggle(props) {
    return (
        <button className="toggle-button">
            <div className="toggle-button-line" />
            <div className="toggle-button-line" />
            <div className="toggle-button-line" />
        </button>
    )
}

export default DrawerToggle;
