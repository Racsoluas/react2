import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);


    useEffect(() => {
        const storedThemeMode = localStorage.getItem('themeMode');
    if(storedThemeMode === 'dark' || (!storedThemeMode && window.matchMedia('(prefers-color-scheme: dark)').matches)){
       setIsDarkMode(true);
       document.documentElement.classList.add('dark-mode');
    } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark-mode');
    }
    }, []);

    const handleThemeToggle = () => {
        if(isDarkMode){
            setIsDarkMode(false);
            localStorage.setItem('themeMode', 'light');
            document.documentElement.classList.remove('dark');
        }else{
            setIsDarkMode(true);
            localStorage.setItem('themeMode', 'dark');
            document.documentElement.classList.add('dark');
        }
    }

    console.log(isDarkMode);

  return (
    <header className="header">
    <div className="container">

        <Link id="logo" className="brand-box" to="/"><img src="/Images/silicon_logo_icon.svg" alt="Silicon Logotype" /><h1 className="brand-name">Silicon</h1></Link>

        <nav id="main-menu" className="navbar">
            <Link className="nav-link" to="#">Features</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
        </nav>

        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
            <span className="label">Dark mode</span>
            <label htmlFor="darkmode-switch" className="toggle-switch">
                <input 
                    id="darkmode-switch" 
                    type="checkbox" 
                    checked={isDarkMode}
                    onChange={handleThemeToggle}
                />
                <span className="slider round"></span>
            </label>
        </div>

        <a id="auth-signin" href="#" className="btn-primary">
            <img src="/Images/dood.svg" alt="icon" />
            <span>Sign in / up</span>
        </a>

        <button className="btn-mobile">
            <i className="fa-solid fa-bars"></i>
        </button>


    </div>
</header>


  )
}

export default Header