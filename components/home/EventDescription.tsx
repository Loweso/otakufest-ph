import React from 'react';
import Image from 'next/image';
import ExternalLink from '@/enums/externalUrls';
import {
    carouselImages,
    OF24_BACKGROUND,
    OF24_LOGO,
    OF24_MAIN_VISUAL,
} from '@/enums/imageUrls';
import { Fade } from 'react-awesome-reveal';
import {
    RiFacebookCircleFill,
    RiTwitterFill,
    RiInstagramFill,
    RiFacebookCircleLine,
    RiTwitterLine,
    RiInstagramLine,
} from 'react-icons/ri';
import { FaPeopleRobbery } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const EventDescription = () => {
    return (
        <>
            <div className="flex flex-col items-center text-center w-full h-[90vh] md:h-[150vh] overflow-hidden relative">
                <Image
                    src={OF24_BACKGROUND}
                    alt="background"
                    fill
                    className="object-cover z-0"
                    priority
                />

                <div className="flex flex-col justify-center items-center text-center w-full h-full md:h-[80vh] overflow-hidden">
                    <div className="absolute bottom-0 flex flex-col h-1/2 w-full md:h-full md:w-1/2 md:right-0 z-[15] items-center text-center px-5 md:px-20">
                        <div className="flex flex-col items-center text-center justify-center w-full h-[90vh] gap-4 md:gap-10">
                            <Fade>
                                <figure className="relative w-[82.5vw] md:w-[500px] h-auto">
                                    <Image
                                        src="/eventDescription/eventLogo.png"
                                        alt="of24visual"
                                        width={500}
                                        height={200}
                                        className="object-contain"
                                    />
                                </figure>

                                <figure className="relative w-[65vw] md:w-72 h-auto">
                                    <Image
                                        src="/eventDescription/eventDate.svg"
                                        alt="of24visual"
                                        width={500}
                                        height={200}
                                        className="object-contain"
                                    />
                                </figure>

                                {/* <span className="text-xs sm:text-md md:text-xl mt-4">
                                Otakufest is the premier and the most
                                anticipated cosplay and hobbies convention in
                                the Visayas, held annually in Cebu City,
                                Philippines. <br />
                                <br />
                                Come join our event happening this{' '}
                                <span className="font-bold"> XXX </span> !
                            </span> */}

                                <div className="flex flex-row text-site-main gap-4">
                                    <a
                                        rel="noreferrer"
                                        href={ExternalLink.FB}
                                        target="_blank"
                                        className="group hover:scale-125 duration-200"
                                    >
                                        <RiFacebookCircleFill className="h-8 w-8 md:h-12 md:w-12 group-hover:hidden" />
                                        <RiFacebookCircleLine className="h-8 w-8 md:h-12 md:w-12 hidden group-hover:block" />
                                    </a>
                                    <a
                                        rel="noreferrer"
                                        href={ExternalLink.TWITTER}
                                        target="_blank"
                                        className="group hover:scale-125 duration-200"
                                    >
                                        <RiTwitterFill className="h-8 w-8 md:h-12 md:w-12 group-hover:hidden" />
                                        <RiTwitterLine className="h-8 w-8 md:h-12 md:w-12 hidden group-hover:block" />
                                    </a>
                                    <a
                                        rel="noreferrer"
                                        href={ExternalLink.INSTAGRAM}
                                        target="_blank"
                                        className="group hover:scale-125 duration-200"
                                    >
                                        <RiInstagramFill className="h-8 w-8 md:h-12 md:w-12 group-hover:hidden" />
                                        <RiInstagramLine className="h-8 w-8 md:h-12 md:w-12 hidden group-hover:block" />
                                    </a>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>

                {/* Carousel — right to left */}
                <div className="hidden md:block relative w-full h-72 overflow-hidden z-[5] mt-16">
                    <motion.div
                        className="flex w-[400%] h-full"
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{
                            repeat: Infinity,
                            ease: 'linear',
                            duration: 30,
                        }}
                    >
                        {carouselImages.map((src, index) => (
                            <div
                                key={index}
                                className="relative w-1/4 h-full flex-shrink-0"
                            >
                                <Image
                                    src={src}
                                    alt={`carousel-${index}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                <figure className="absolute top-[760px] md:top-[70vh] aspect-square w-[75dvh] sm:w-[150dvh] md:w-[200dvh] md:ml-[-85vh] mt-[-800px] z-[10]">
                    <Image
                        src={OF24_MAIN_VISUAL}
                        alt="of24visual"
                        fill
                        className="object-cover"
                    />
                </figure>
            </div>

            {/* Carousel — right to left */}
            <div className="md:hidden relative w-full h-24 overflow-hidden z-[5]">
                <motion.div
                    className="flex w-[200%] h-full"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 30,
                    }}
                >
                    {carouselImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative w-1/4 h-full flex-shrink-0"
                        >
                            <Image
                                src={src}
                                alt={`carousel-${index}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="flex flex-col justify-center items-center text-center w-full overflow-hidden p-5 md:p-24 bg-site-main">
                <span className="text-md sm:text-lg md:text-4xl leading-4">
                    <b>Otakufest</b> is the premier and the most anticipated
                    cosplay and hobbies convention in the Visayas, held annually
                    in Cebu City, Philippines. <br />
                    <br />
                    Ready to level up your otaku experience?
                </span>
            </div>
        </>
    );
};

export default EventDescription;
