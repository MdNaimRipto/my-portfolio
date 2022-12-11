import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const Blogs = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <h2 className='text-5xl font-semibold'>Coming soon
                <span className='text-primary'>
                    <Typewriter
                        className='text-primary'
                        words={[
                            '...',
                            '...',
                        ]}
                        loop={5}
                        cursor
                        cursorStyle='!'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    /></span>
            </h2>
        </div>
    );
};

export default Blogs;