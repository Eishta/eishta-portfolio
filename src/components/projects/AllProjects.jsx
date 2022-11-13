import React from 'react'
// import IMG from '../../assets/portfolio1.jpg'
import ProjectCard from './ProjectCard';
import { useSelector } from 'react-redux';

const AllProjects = ({ filterProp }) => {
  const projects = useSelector(state => state.detail?.projects || []);
  let desc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eum deleniti molestiae ipsam quasi et? Hic voluptates ipsam aspernatur. Necessitatibus ratione voluptates accusantium mollitia cum! Excepturi odio unde quam nemo!"
  return (
    <div className="container projects__container">
      {projects && projects.length > 0 && projects.map((project, i) => (filterProp == 'all' || project[filterProp]) && <ProjectCard i={i} project={project} desc={desc}/>)
      }
    </div>
  )
}

export default AllProjects