import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from "react-router-dom"

const Projects = () => {
    const { data: projects = [] } = useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            const res = await fetch("projects.json");
            const data = await res.json()
            return data
        }
    })

    return (
        <div
            data-aos="fade-up"
            id="projects"
            className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none sm:text-4xl md:mx-auto">
                    My Best Projects
                </h2>
            </div>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    projects.map(project =>
                        <div key={project.id}>
                            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    className="object-cover w-full h-60"
                                    src={project?.img}
                                    alt=""
                                />
                                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                    <p className="mb-1 text-lg font-bold text-gray-100">
                                        {project.projectFor}
                                    </p>
                                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                                        {project.shortInfo}
                                    </p>
                                    <div className="flex flex-col items-center justify-center space-y-3">
                                        <a href={project.link} target="_blank" rel="noreferrer">
                                            <button className='btn btn-primary btn-sm'>
                                                Visit Project
                                            </button>
                                        </a>
                                        <Link to={`/project/${project.id}`}>
                                            <button className='btn btn-warning btn-sm'>
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <h2 className='text-xl text-center my-2 font-bold'>{project.name}</h2>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;