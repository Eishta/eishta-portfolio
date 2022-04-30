import React from 'react'
import {BsLinkedin , BsMedium, BsGithub} from 'react-icons/bs';
import { useSelector } from 'react-redux';

const HeaderSocialIcons = () => {
  const socialLinks = useSelector(state => state.detail?.socialLinks || {})
  return (
    <div className='header__socials'>
        <a href={socialLinks.linkedIn} targte="_blank"><BsLinkedin/></a>
        <a href={socialLinks.github} targte="_blank"><BsGithub/></a>
        <a href={socialLinks.medium} targte="_blank"><BsMedium/></a>
    </div>
  )
}

export default HeaderSocialIcons