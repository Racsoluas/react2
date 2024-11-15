import React from 'react'

function Hero() {
  return (
    <section id="hero">
    <div className="container">
        <div className="headline">
            <h1>Manage All Your Money in One App</h1>
        </div>
        <div className="content">
            <p className="hero-text">We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
            <div className="buttons">
                <a className="btn-download-app" href="#">
                    <img src="/Images/app-blk.svg" alt="App Store button" />
                </a>
                <a className="btn-download-app" href="#">
                    <img src="/Images/googleplay-light.svg.svg" alt="Google Play button" />
                </a>
            </div>

            <a href="#" className="discover-more">
                <span className="btn-circle">
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
                <span>Discover more</span>
            </a>
        </div>

        <div className="images">
            <img className="img-back" src="/Images/shadow-iphone.png" alt="skugga" />
            <img className="img-middle" src="/Images/iPhone 12 Pro-2.png" alt="iphone-my-budget" />
            <img className="img-front" src="/Images/iPhone 12 Pro.png" alt="iphone-your-cards" />
        </div>
    </div>
</section>
  )
}

export default Hero