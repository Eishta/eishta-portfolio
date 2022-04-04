import React from 'react'
import { useSelector } from 'react-redux';
import './education.css';

const Education = () => {
    const edu = useSelector(state => state.detail?.education || []);
    return (
        <section id='education'>
            <h5>Where I studied</h5>
            <h2>Education</h2>
            <div className='container edu__container'>
                {
                    edu.map((e,i) => <div className='edu' key={i}>
                        <div className='course'>
                            <h2>{e.course}</h2>
                            <small className='text-light'>{e.period}</small>
                        </div>
                        <div className='college'>
                            <h2>{e.college}</h2>
                            <h5>{e.rank}</h5>
                        </div>
                    </div>)
                }
            </div>
        </section>
    )
}

export default Education