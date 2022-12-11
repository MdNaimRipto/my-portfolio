import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FiCheckCircle } from "react-icons/fi"
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

const ProjectDetails = () => {
    const details = useLoaderData()
    return (
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 row-gap-8 lg:grid-cols-2">
                    <div className='w-full h-[250px] md:h-full overflow-hidden' data-aos="fade-right">
                        <Swiper

                            style={{
                                "--swiper-navigation-color": "#ddd",
                                "--swiper-pagination-color": "#ddd",
                            }}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className=""
                        >
                            {
                                details.screenshots.map(ss =>
                                    <SwiperSlide>
                                        <PhotoProvider>
                                            <PhotoView src={ss.img}>
                                                <img
                                                    className="object-cover w-full rounded shadow-lg sm:h-[30rem]"
                                                    src={ss.img}
                                                    alt=""
                                                />
                                            </PhotoView>
                                        </PhotoProvider>
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </div>
                    <div className="flex flex-col justify-center" data-aos="fade-left">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-3 font-sans text-3xl font-bold sm:text-4xl sm:leading-none">
                                {details.name}
                            </h2>
                            <p className="text-base md:text-lg mb-2">
                                <span className='font-bold text-primary'>{details.projectFor}</span>
                            </p>
                            <div className="text-base md:text-lg mb-6">
                                <span className='font-semibold pb-2 block'>Features & Technologies:</span>
                                <ul>
                                    {
                                        details.details.map(detail =>
                                            <div className='flex items-center mb-2'>
                                                <FiCheckCircle className='text-success mr-2' />
                                                <li
                                                    key={detail.id}
                                                    className="text-sm"
                                                >
                                                    {detail.feature}
                                                </li>
                                            </div>
                                        )
                                    }
                                </ul>
                            </div>
                            <div className="text-base md:text-lg">
                                <ul className='flex flex-wrap items-center'>
                                    {
                                        details.technologies.map(tech =>
                                            <li
                                                key={tech.id}
                                                className="border-2 text-sm p-2 rounded-3xl mr-2 mb-2 text-primary border-current"
                                            >
                                                {tech.tech}
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ProjectDetails;