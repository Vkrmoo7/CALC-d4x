// src/components/Navbar/navbar.js

import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext'; // Adjust the path as necessary
import './Navbar.css';

const Navbar = () => {
    const { toggleTheme } = useContext(ThemeContext); // Use the context
    const [showSettings, setShowSettings] = useState(false);

    const toggleSettingsMenu = () => {
        setShowSettings(prevState => !prevState);
    };

    return (
        <>
            {/* Top Navbar: App name on the left and settings on the right */}
            <nav className="navbar-top">
                <div className="navbar-brand">
                    <h1>D4x-!</h1>
                </div>
                <div className="navbar-settings" onClick={toggleSettingsMenu}>
                    <i className="fas fa-cog"></i>
                    <span className="beta-tag">BETA</span>
                </div>
            </nav>

            {/* Settings Menu */}
            {showSettings && (
                <div className="settings-menu">
                    <h3>Settings</h3>
                    <div className="theme-options">
                        <h4>Theme</h4>
                        <button onClick={() => toggleTheme('light')}>Light</button>
                        <button onClick={() => toggleTheme('dark')}>Dark</button>
                    </div>
                    <div className="app-info">
                        <h4>About the App</h4>
                        <p>This app bulid with <b>REACT</b></p>
                        <p>Developed By <i>D4x-!</i></p>
                    </div>
                </div>
            )}

            {/* Bottom Navigation */}
            <nav className="navbar-bottom">
                <ul className="navbar-links">
                    <li>
                        <Link to="/">
                            <i className="bi bi-house-door-fill"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/calculators">
                            <i className="bi bi-calculator-fill"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <i className="bi bi-info-circle-fill"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
