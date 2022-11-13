import React from 'react'

import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className = "footer">
      <p>Thank you for your visit today! &copy; Kaung 2022</p>
      <div className = "footer-right">
        <p>Checkout my other profiles</p>
        <GitHubIcon className = "profile-links" fontSize='large'/>
        <LinkedInIcon className = "profile-links" fontSize='large'/>
      </div>
    </div>
  )
}

export default Footer
