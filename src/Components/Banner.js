import React from 'react';
import banner from "../Assets/images/banner.png"
import { Typewriter } from 'react-simple-typewriter'
import { BsFacebook, BsLinkedin } from "react-icons/bs"
import { AiFillGithub } from "react-icons/ai"

const Banner = () => {

    return (
        <div
            id='home'
            className="px-4 py-16 mx-auto w-[96%] md:w-[96%] lg:w-4/5 md:px-24 lg:px-8 lg:py-20 bg-[#00000042] rounded-2xl my-12 container">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                <div className='w-4/5 hidden lg:block' data-aos="fade-right">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src={banner}
                        alt=""
                    />
                </div>
                <div className="flex flex-col justify-center" data-aos="fade-left">
                    <div className="max-w-xl mb-6 text-center lg:text-left">
                        <h2
                            className="max-w-lg mb-6 font-sans text-2xl md:text-4xl font-bold"
                            style={{ lineHeight: "55px" }}
                        >
                            Hi, I am <span className='text-primary'>MD Naimur Rahman.</span><br />
                            <span className='text-primary'>
                                <Typewriter
                                    className='text-primary'
                                    words={['Mern-Stack Developer',
                                        'Full-Stack Web Developer',
                                        'Front-end Web Developer',
                                        'Javascript Developer',
                                        'ReactJS Developer'
                                    ]}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                /></span>
                        </h2>
                        <p className="text-base md:text-lg text-justify pr-0 lg:pr-8">
                            I am a Web Developer with six months of learning experience. I can make a fully functional Website from scratch. I have completed 12 different projects.
                        </p>
                    </div>
                    <div className='flex justify-between items-center w-[65%] md:w-[45%]'>
                        <h2 className='font-semibold text-2xl uppercase'>Find Me  on:</h2>
                        <div className='flex justify-between items-center w-[30%] gap-4'>
                            <a
                                href="https://www.facebook.com/mdnaimur.rahman.50309"
                                target="_blank" rel="noreferrer">
                                <button className='btn btn-square hover:btn-primary text-white'>
                                    <BsFacebook className="text-lg" />
                                </button>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/naimur-rahman2001/"
                                target="_blank"
                                rel="noreferrer">
                                <button className='btn btn-square hover:btn-primary text-white'>
                                    <BsLinkedin className="text-lg" />
                                </button>
                            </a>
                            <a
                                href="https://github.com/MdNaimRipto"
                                target="_blank"
                                rel="noreferrer">
                                <button className='btn btn-square hover:btn-primary text-white'>
                                    <AiFillGithub className="text-lg" />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;