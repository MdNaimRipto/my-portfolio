import React from 'react';

const Skills = () => {
    return (
        <div
            id="skills"
            className='container w-[96%] lg:w-[90%] mx-auto my-12' data-aos="fade-up">
            <h2 className='text-left md:text-center text-4xl font-bold mb-8'>My Skills</h2>
            <div className='flex justify-between gap-5'>
                <div className='w-full'>
                    <p>HTML5</p>
                    <progress className="progress progress-primary bg-white" value="80" max="100"></progress>
                    <p>CSS3</p>
                    <progress className="progress progress-primary bg-white" value="80" max="100"></progress>
                    <p>Bootstrap</p>
                    <progress className="progress progress-primary bg-white" value="85" max="100"></progress>
                    <p>Tailwind CSS</p>
                    <progress className="progress progress-primary bg-white" value="85" max="100"></progress>
                    <p>Javascript</p>
                    <progress className="progress progress-primary bg-white" value="70" max="100"></progress>
                </div>
                <div className='w-full'>
                    <p>ES6</p>
                    <progress className="progress progress-primary bg-white" value="70" max="100"></progress>
                    <p>ReactJS</p>
                    <progress className="progress progress-primary bg-white" value="80" max="100"></progress>
                    <p>NodeJS</p>
                    <progress className="progress progress-primary bg-white" value="60" max="100"></progress>
                    <p>MongoDB</p>
                    <progress className="progress progress-primary bg-white" value="60" max="100"></progress>
                    <p>JWT</p>
                    <progress className="progress progress-primary bg-white" value="60" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default Skills;