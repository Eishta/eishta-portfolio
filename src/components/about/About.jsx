import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { useSelector } from 'react-redux';

const About = () => {
  const aboutInfo = useSelector(state =>  state.detail.about)

  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="" className='about__me-image' />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>{aboutInfo?.exp}+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUser className='about__icon' />
              <h5>Projects</h5>
              <small>{aboutInfo?.projects}+ Personal</small>
            </article>
          </div>
          <p>
            {aboutInfo?.intro}
          </p>
          <a href="" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About