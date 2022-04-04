import React , {useState} from 'react'
import AllProjects from './AllProjects';
import './projects.css';


const Projects = () => {
  const [filter, setFilter] = useState('isDsa');
  const [filters, setFilters] = useState([{filter: 'all', name: 'All' }, {filter: 'isDsa', name: 'DSA' }, {filter: 'isFront', name: 'Frontend' }, {filter: 'isBackend', name: 'Backend' }])
  return (
    <section className='projects'>
      <h2>Projects</h2>
      <h5>Lorem ipsum dolor sit amet.</h5>
      <div className="filters">
        {filters.map((fil,i)=> <div key={i} className={fil.filter === filter ? 'filter active' : 'filter'} onClick={()=> setFilter(fil.filter)}>{fil.name}</div>)}
      </div>
      <AllProjects filterProp={filter} />
    </section>
  )
}

export default Projects