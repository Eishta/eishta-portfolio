const ProjectCard = ({i, project, desc}) => {
    return (
        <article className="project" key={i}>
            <img src={process.env.PUBLIC_URL + '/assets' + project.image} alt="" className="project__image" />
            <div className="project__content">
                <div className="project__tag">
                    <h3>{project.name}</h3>
                </div>
                <div className="project__desc">
                    <p>{`${desc.substring(0, 50)}...`}</p>
                </div>
                <div className="btns">
                    <a href={project.gitLink} className='btn btn-primary' target='_blank'>Github</a>
                    <a href={project.demoLink} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </div>
        </article>
    )

}
export default ProjectCard;