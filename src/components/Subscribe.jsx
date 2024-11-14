import React from 'react'

function Subscribe() {
  return (
    <div className="subscribe">
    <div className="wrapper-sub">
        <div className="bell bell-sub" id="bell-1">
            <img src="/Images/bell-icon.svg" alt="Gul klocka" />
        </div>
        <div className="sub-text sub-text-1" id="text-1">
            <h1>Subscribe to our newsletter</h1>
        </div>
        <div>
            <h1 className="sub-text-2">Subscribe to our newaletter to stay informed about latest updates</h1>
        </div>
    <div className="input-group" id="in-mail">
        <img className="envelope" src="/Images/bx-envelope.svg" alt="Kuvert" />
        <input className="form-input email" type="email" placeholder="Your Email" />
        <button className="btn-sub">Subscribe</button>
    </div>
    </div>
    </div>
  )
}

export default Subscribe