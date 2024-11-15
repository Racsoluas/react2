import React, { useState, useEffect } from 'react'

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
    <header>
    <div className="container">

        <a id="logo" className="brand-box" href="index.html"><img src="/Images/silicon_logo_icon.svg" alt="Silicon Logotype" /><h1 className="brand-name">Silicon</h1></a>

        <nav id="main-menu" className="navbar">
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Contact</a>
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