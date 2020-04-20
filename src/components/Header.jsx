import React from 'react';
import '../styles/Header-Styles.css';

function Header() {
    return (
        <nav className="nav-flex navbar">
            <div className="nav-flex nav-start">
                <a href="#">LOGO</a>
                <a href="#">HOME</a>
                <a href="#">BROWSE</a>
            </div>
            <div className="search">
                <input type="text" name="" id=""/>
            </div>
            <div className="nav-flex nav-end">
                <a href="#">PATH</a>
                <a href="#">CHANNEL</a>
                <a href="#">NOTIFICATION</a>
                <a href="#">PROFILE</a>
            </div>
        </nav>
    )
}

export default Header;