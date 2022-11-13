import React from 'react';
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav';
import About from '../components/about/About';
import Experience from '../components/experience/Experience';
import Skills from '../components/skills/Skills';
import Education from '../components/education/Education';
import Blogs from '../components/blogs/Blogs';
import Services from '../components/services/Services';
import Portfolio from '../components/portfolio/Portfolio';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';


const Layout = () => {

    return (
        <>
            <Header />
            <Nav />
            <About />
            <Skills />
            <Education/>
            <Experience />
            {/* <Services /> */}
            <Portfolio />
            <Blogs/>
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default Layout;