import React from 'react';
// import CV from '../../assets/cv.pdf';

const CTA = () => {
    return (
        <div className='cta'>
            <a href={process.env.PUBLIC_URL + '/assets' + "/ResumeE.pdf"} download="cv.pdf" className='btn'>Downlaod CV</a>
            <a href="#contact" className='btn btn-primary'> Let's Talk</a>

        </div>
    )
}

export default CTA