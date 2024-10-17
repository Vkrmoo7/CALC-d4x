import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Calculators.css';

const Calculators = () => {
    const [sidebarActive, setSidebarActive] = useState(false);
    const [isSwipedRight, setIsSwipedRight] = useState(false);
    let touchStartX = 0;

    const toggleSidebar = () => {
        setSidebarActive((prev) => !prev);
    };

    const handleTouchStart = (e) => {
        touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchEndX - touchStartX > 50) {
            setIsSwipedRight(true); // Swipe Right
        } else if (touchStartX - touchEndX > 50) {
            setIsSwipedRight(false); // Swipe Left
        }
    };

    const handleCalculatorSelect = () => {
        setIsSwipedRight(false); // Close panel when a calculator is selected
    };

    return (
        <div className="dashboard-container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            {/* Sidebar for desktop and larger screens */}
            <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
                <h2>Available Calculators</h2>
                <button 
                    className="toggle-button" 
                    onClick={toggleSidebar}
                    aria-expanded={sidebarActive} 
                    aria-controls="sidebar"
                >
                    ☰
                </button>
                <ul className="calculator-list" id="sidebar">
                    {["basic", "bmi", "age", "expense"].map(calculator => (
                        <li key={calculator}>
                            <Link to={calculator} onClick={handleCalculatorSelect}>
                                <i className={`fas fa-${calculator === 'basic' ? 'calculator' : calculator === 'bmi' ? 'weight' : calculator === 'age' ? 'birthday-cake' : 'money-bill-wave'}`}></i> 
                                <span>{`${calculator.charAt(0).toUpperCase() + calculator.slice(1)} Calculator`}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Swipe-right drawer for mobile view */}
            <div className={`swipe-right-panel ${isSwipedRight ? 'visible' : ''}`}>
                <div className="swipe-handle"></div>
                <ul className="calculator-list-mobile">
                    {["basic", "bmi", "age", "expense"].map(calculator => (
                        <li key={calculator}>
                            <Link to={calculator} onClick={handleCalculatorSelect}>
                                <i className={`fas fa-${calculator === 'basic' ? 'calculator' : calculator === 'bmi' ? 'weight' : calculator === 'age' ? 'birthday-cake' : 'money-bill-wave'}`}></i> 
                                <span>{`${calculator.charAt(0).toUpperCase() + calculator.slice(1)}`}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="working-area">
                <Outlet />
            </div>
        </div>
    );
};

export default Calculators;
