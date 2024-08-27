import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("dark");

    const initializeTheme = () => {
        setTheme(localStorage.getItem('theme') || "dark");
    };
    
    const ToggleTheme = () => {
        if(theme ==='dark'){
            setTheme("light");
            localStorage.setItem("theme","light")
        }else{
            setTheme("dark");
            localStorage.setItem("theme","dark")
        }
        
    };

    useEffect(() => {
        
        document.documentElement.className = theme;
    }, [theme]);
    useEffect(() => {
        initializeTheme();
    }, []);

    

    return (
        <ThemeContext.Provider value={{ theme, ToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
