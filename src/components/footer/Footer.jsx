import React from 'react'
import './footer.css';
import {BsLinkedin , BsMedium, BsGithub} from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Footer = () => {
  const socialLinks = useSelector(state => state.detail?.socialLinks || {})

  return (
    <footer>
      <a href="#" className='footer__logo'> eishta</a>
        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
          <a href={socialLinks.linkedIn} target='_blank'><BsLinkedin/></a>
          <a href={socialLinks.github} target='_blank'><BsGithub/></a>
          <a href={socialLinks.medium} target='_blank'><BsMedium/></a>
        </div>
    </footer>
  )
}

export default Footer