import React from 'react'
import './experience.css';
import { useSelector } from 'react-redux';

const Experience = () => {
    const userExp = useSelector(state => state.detail?.experience || [])

    return (
        <section id="experience">
            <h5>
                Organisational Experience
            </h5>
            <h2 >Experience</h2>
            <div className="container experience__container">
                {userExp.map((row, i) => (<article className="exp__article" key={i}>
                    <div className="exp__content">
                        <div className="exp__org">
                            <h3>{row.org}</h3>
                        </div>
                        <div className="exp__desc">
                            <h5>{row.position}</h5>
                            <small className='text-light'>{row.workPeriod}</small>
                        </div>
                    </div>
                </article>))}

            </div>

        </section>
    )
}

export default Experience