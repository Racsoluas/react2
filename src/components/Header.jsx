import React from 'react'

function Header() {
  return (
    <header>
    <div className="container">

        <a id="logo" href="index.html"><img src="/Images/logo.svg" alt="Silicone Logotype" /></a>

        <nav id="main-menu" className="navbar">
            <a className="nav-link" href="#">Features</a>
        </nav>

        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
            <span className="label">Dark mode</span>
            <label for="darkmode-switch" className="toggle-switch">
                <input id="darkmode-switch" type="checkbox" />
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