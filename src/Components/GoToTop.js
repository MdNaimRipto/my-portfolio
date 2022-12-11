import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BiUpArrow } from "react-icons/bi"

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    const goToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    const listenToScroll = () => {
        let heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
        return () => window.removeEventListener("scroll", listenToScroll)
    }, [])
    return (
        <>
            {
                isVisible && (
                    <div className='flex justify-center items-center fixed bottom-[5%] right-[1%]'>
                        <button
                            className='btn btn-circle btn-primary'
                            onClick={goToTop}>
                            <BiUpArrow />
                        </button>
                    </div>
                )
            }
        </>
    );
};


export default GoToTop;