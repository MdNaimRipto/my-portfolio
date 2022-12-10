import React from 'react';
import project1 from "../Assets/projects/project1.jpg"
import project2 from "../Assets/projects/project2.jpg"
import project3 from "../Assets/projects/project3.jpg"
import project4 from "../Assets/projects/project4.webp"

const Projects = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none sm:text-4xl md:mx-auto">
                    My Best Projects
                </h2>
            </div>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-60"
                            src={project1}
                            alt=""
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                                Mern-Stack Project
                            </p>
                            <p className="mb-4 text-xs tracking-wide text-gray-400">
                                A website for buying and selling cars.
                            </p>
                            <div className="flex items-center justify-center space-x-3">
                                <a href="https://recycle-hub-e5949.web.app/" target="_blank" rel="noreferrer">
                                    <button className='btn btn-primary btn-sm'>
                                        Visit Project
                                    </button>
                                </a>
                            </div>
                        </div>
                        <h2 className='text-xl text-center my-2 font-bold'>Recycle Hub</h2>
                    </div>
                </div>

                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-60"
                            src={project2}
                            alt=""
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                                Mern-Stack Project
                            </p>
                            <p className="mb-4 text-xs tracking-wide text-gray-400">
                                A website for ordering foods.
                            </p>
                            <div className="flex items-center justify-center space-x-3">
                                <a href="https://the-foodie-express.firebaseapp.com/"
                                    target="_blank" rel="noreferrer">
                                    <button className='btn btn-primary btn-sm'>
                                        Visit Project
                                    </button>
                                </a>
                            </div>
                        </div>
                        <h2 className='text-xl text-center my-2 font-bold'>The Foodie Express</h2>
                    </div>
                </div>

                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-60"
                            src={project3}
                            alt=""
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                                Full-Stack Project
                            </p>
                            <p className="mb-4 text-xs tracking-wide text-gray-400">
                                A full-stack website for purchasing new Courses.
                            </p>
                            <div className="flex items-center justify-center space-x-3">
                                <a href="https://learn-programming-96a3d.web.app/"
                                    target="_blank" rel="noreferrer">
                                    <button className='btn btn-primary btn-sm'>
                                        Visit Project
                                    </button>
                                </a>
                            </div>
                        </div>
                        <h2 className='text-xl text-center my-2 font-bold'>Learn Programming</h2>
                    </div>
                </div>

                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-60"
                            src={project4}
                            alt=""
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                                Front-end ReactJS Project
                            </p>
                            <p className="mb-4 text-xs tracking-wide text-gray-400">
                                A front-end website for showing my ReactJS skill.
                            </p>
                            <div className="flex items-center justify-center space-x-3">
                                <a href="https://fitness-club-co.netlify.app/"
                                    target="_blank" rel="noreferrer">
                                    <button className='btn btn-primary btn-sm'>
                                        Visit Project
                                    </button>
                                </a>
                            </div>
                        </div>
                        <h2 className='text-xl text-center my-2 font-bold'>Fitness Club</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;