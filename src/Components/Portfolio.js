import React from 'react';
import About from "./About";
import Banner from "./Banner";
import Contacts from "./Contacts";
import Footer from "./Footer";
import GoToTop from './GoToTop';
import Projects from "./Projects";
import Skills from "./Skills";

const Portfolio = () => {
    return (
        <div>
            <Banner />
            <Projects />
            <Skills />
            <About />
            <Contacts />
            <GoToTop />
            <Footer />
        </div>
    );
};

export default Portfolio;