import React from 'react';
import './navbar.css';

export function Navbar() {
    return (
        <div className="nav-container">
            <a href="#about_me_link">About Me</a>
            <a href="#projects_link">Projects</a>
            <a href="#cv_link">CV</a>
        </div>
    )
}