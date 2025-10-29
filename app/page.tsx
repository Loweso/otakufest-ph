'use client';

import React, { useState, useEffect } from 'react';
import { HomePage } from '@/components/home/HomePage';
import EventDescription from '@/components/home/EventDescription';
import GuestSection from '@/components/home/GuestSection';
import SalesSection from '@/components/home/SalesSection';
import EventSection from '@/components/home/EventSection';
import SponsorSection from '@/components/home/SponsorSection';
import BoothSection from '@/components/home/BoothSection';
import { EventTimer } from '@/components/home/EventTimer';
import { FaArrowUp } from 'react-icons/fa';

const Home = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Show button after scrolling 300px
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* <section>
                <HomePage />
            </section> */}

            <section>
                <EventDescription />
            </section>

            <section id="guestSection">
                <GuestSection />
            </section>

            <section id="shirtSection">
                <SalesSection />
            </section>

            <section id="eventSection">
                <EventSection />
            </section>

            <section>
                <BoothSection />
            </section>

            {/* <section>
                <VtuberSection />
            </section> */}

            <section>
                <SponsorSection />
            </section>
            <EventTimer />

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 
                               bg-site-main text-white p-2 sm:p-3 md:p-4 
                               rounded-full shadow-lg 
                               hover:bg-site-main/80 hover:scale-110 active:scale-95 
                               transition duration-300"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp size={16} className="sm:size-20 md:size-24" />
                </button>
            )}
        </>
    );
};

export default Home;
