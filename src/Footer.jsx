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
        <a href = "https://github.com/Programmingrelated1999" className = "footer-links" target = "blank"><GitHubIcon style={{ textDecoration: 'none' }} className = "profile-links" fontSize='large'/></a>
        <a href = "https://www.linkedin.com/in/kaung-htet-myat-400015173/" className = "footer-links" target = "blank"><LinkedInIcon className = "profile-links" fontSize='large'/></a>
      </div>
    </div>
  )
}

export default Footer
