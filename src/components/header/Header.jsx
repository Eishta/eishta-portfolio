import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/Myimage.png';
import HeaderSocialIcons from './HeaderSocialIcons';
// import Typical from 'react-typical';

const Header = () => {

  return (
    <header>
      <div className="container header__container">
        <div className="info">
          <h5>Hello I'm</h5>
          <h1>Eishta Mittal</h1>
          {/* <Typical
            className="text-light"
            steps={['A Web Developer', 1000, 'A learner', 1000, "Content Creator", 1000]}
            loop={Infinity}
            
          /> */}
          <CTA />
        </div>
        <HeaderSocialIcons />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header