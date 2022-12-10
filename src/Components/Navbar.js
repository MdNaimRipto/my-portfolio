import React from 'react';
import resume from "../Assets/resume/Naimur Rahman Resume.pdf"
import logo from "../Assets/images/logo.png"

const Navbar = () => {
    const MenuItems =
        <>
            <li><a href="#home" alt="">HOME</a></li>
            <li><a href="#projects" alt="">PROJECTS</a></li>
            <li><a href="#skills" alt="">SKILLS</a></li>
            <li><a href="#about" alt="">ABOUT ME</a></li>
            <li><a href="/contact" alt="">CONTACT ME</a></li>
            <button className='btn btn-outline btn-primary '>
                <a href={resume} alt="" download>DOWNLOAD RESUME</a>
            </button>
        </>
    return (
        <div className="navbar bg-base-100 py-6 container mx-auto border-b border-gray-300">
            <div className="navbar-start flex-row-reverse justify-between w-full">
                <div className='flex'>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-72 font-semibold">
                            {MenuItems}
                        </ul>
                    </div>
                </div>
                <a href="/" alt=""
                    className="font-bold flex justify-between items-center w-[64%] md:w-[42%]">
                    <div className='w-1/4'>
                        <img src={logo} alt="" className='rounded-full' />
                    </div>
                    <span className='text-2xl md:text-[30px] lg:text-2xl'>MY PORTFOLIO</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    {MenuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;