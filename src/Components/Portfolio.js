import React from 'react';
import About from "./About";
import Banner from "./Banner";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Navbar from './Navbar';
import Projects from "./Projects";
import Skills from "./Skills";

const Portfolio = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Projects />
            <Skills />
            <About />
            <Contacts />
            <Footer />
        </div>
    );
};

export default Portfolio;