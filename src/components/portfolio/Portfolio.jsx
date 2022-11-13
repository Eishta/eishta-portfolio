import React from 'react'
import './portfolio.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Portfolio = () => {
  const projects = useSelector(state => state.detail?.projects || []);
  if (projects.length > 6) {
    projects = [...projects];
  }
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.length > 0 && projects.map((project, i) => <article className="portfolio__item" key={i}>
          <div className="portfolio__item-image">
            <img src={process.env.PUBLIC_URL + '/assets' + project.image} alt="" />
          </div>
          <h3>{project.name}</h3>
          <div className="portfolio__item-cta">
            <a href={project.gitLink} className='btn' target='_blank'>Github</a>
            <a href={project.demoLink} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>)}
      </div>
      <Link to='/projects' className='portfolio__show-more'>Show more...</Link>
    </section>
  )
}

export default Portfolio;