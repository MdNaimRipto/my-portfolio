import React from 'react';
import { BsFacebook, BsLinkedin } from "react-icons/bs"
import { AiFillGithub } from "react-icons/ai"

const Footer = () => {
    return (
        <footer>
            <h2 className='text-2xl text-center font-bold'>MD Naimur Rahman</h2>
            <div className='flex justify-between items-center w-[65%] md:w-[45%] mx-auto'>
                <div className='flex justify-between items-center w-[30%] gap-4 mx-auto my-8'>
                    <a
                        href="https://www.facebook.com/mdnaimur.rahman.50309"
                        target="_blank" rel="noreferrer">
                        <button className='btn btn-circle hover:btn-primary text-white'>
                            <BsFacebook className="text-lg" />
                        </button>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/naimur-rahman2001/"
                        target="_blank"
                        rel="noreferrer">
                        <button className='btn btn-circle hover:btn-primary text-white'>
                            <BsLinkedin className="text-lg" />
                        </button>
                    </a>
                    <a
                        href="https://github.com/MdNaimRipto"
                        target="_blank"
                        rel="noreferrer">
                        <button className='btn btn-circle hover:btn-primary text-white'>
                            <AiFillGithub className="text-lg" />
                        </button>
                    </a>
                </div>
            </div>
            <p className='text-center mb-8'>Copyright C. All right reserved.</p>
        </footer>
    );
};

export default Footer;