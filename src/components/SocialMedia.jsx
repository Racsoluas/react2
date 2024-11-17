import React from 'react'
import { images } from '../constants'

function SocialMedia() {
  return (
    <div className='social-media'>
      <div>
        <a href="#" target="_blank" rel="noreferrer">
          <img src="/Images/facebook-icon.svg" alt="facebook" />
        </a>
      </div>
      <div>
        <a href="#" target="_blank" rel="noreferrer">
          <img src="/Images/twitter-icon.svg" alt="twitter" />
        </a>
      </div>
      <div>
        <a href="#" target="_blank" rel="noreferrer">
          <img src="/Images/instagram-icon.svg" alt="instagram" />
        </a>
      </div>
      <div>
        <a href="#" target="_blank" rel="noreferrer">
          <img src="/Images/youtube-icon.svg" alt="youtube" />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia