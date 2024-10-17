// src/components/ThemeContext.js

import React, { createContext, useState } from 'react';

// Create the ThemeContext
export const ThemeContext = createContext();

// Create the ThemeProvider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Default theme

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
        document.body.className = newTheme; // Apply the theme to the body class
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
