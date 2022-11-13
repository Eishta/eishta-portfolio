import React , {useState} from 'react'
import AllProjects from './AllProjects';
import './projects.css';


const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filters, setFilters] = useState([{filter: 'all', name: 'All' }, {filter: 'interview', name: 'Interview' }, {filter: 'javascript', name: 'Javascript' }, {filter: 'react', name: 'React' }])
  return (
    <section className='projects'>
      <h2>Projects</h2>
      <div className="filters">
        {filters.map((fil,i)=> <div key={i} className={fil.filter === filter ? 'filter active' : 'filter'} onClick={()=> setFilter(fil.filter)}>{fil.name}</div>)}
        
      </div>
      <AllProjects filterProp={filter} />
    </section>
  )
}

export default Projects