'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import { EVENTS, PARTNERED_EVENTS } from '@/enums/imageUrls';
import ScrollableImages from '@/components/events/scrollableImages';
import EventDetails from '@/components/events/EventDetails';

const EventDetailsPage = () => {
    const params = useParams();
    const slug = params.slug as string;

    const allEvents = { ...EVENTS, ...PARTNERED_EVENTS };
    const event = Object.values(allEvents).find(
        (event) => event.slug === slug && event.isRevealed
    );

    if (!event) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
                        Event Not Found
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl px-4 md:px-6 mb-8 text-gray-600 leading-tight">
                        The event you're looking for doesn't exist or has been
                        removed.
                    </p>
                    <Link
                        href="/"
                        className="bg-site-main text-white px-8 py-1.5 sm:px-12 sm:py-2 rounded-full sm:text-lg md:text-xl font-bold hover:bg-site-main/75 transition shadow-lg hover:shadow-xl"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const galleryImages = [event.imageUrl, event.imageUrl, event.imageUrl];

    return (
        <div className="min-h-screen bg-white">
            <ScrollableImages
                images={galleryImages}
                eventName={event.eventName}
            />

            <div className="max-w-6xl mx-auto px-4 py-8">
                <Fade>
                    <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
                        <figure className="relative aspect-square w-40 sm:w-48 md:w-52 lg:w-64 xl:w-80 hover:scale-105 duration-200">
                            <Image
                                src={event.imageUrl}
                                alt={event.eventName}
                                fill
                                className="object-cover"
                            />
                        </figure>

                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                                {event.eventName.toUpperCase()}
                            </h1>
                            <Link
                                href={event.eventURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-site-main text-white px-8 py-1.5 sm:px-12 sm:py-2 rounded-full sm:text-lg md:text-xl font-bold hover:bg-site-main/75 transition shadow-lg hover:shadow-xl"
                            >
                                REGISTER NOW!
                            </Link>
                        </div>
                    </div>

                    <EventDetails />

                    <div className="flex justify-center my-8">
                        <button
                            onClick={() =>
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }
                            className="bg-site-main hover:bg-site-main/75 text-white p-3 rounded-full transition duration-200"
                            aria-label="Scroll to top"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                                />
                            </svg>
                        </button>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default EventDetailsPage;
