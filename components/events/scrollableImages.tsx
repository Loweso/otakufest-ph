'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ScrollableImagesProps {
    images: string[];
    eventName: string;
}

const ScrollableImages: React.FC<ScrollableImagesProps> = ({
    images,
    eventName,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    if (images.length === 0) return null;

    return (
        <div className="relative w-full bg-gray-300">
            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden bg-gray-300">
                <button
                    onClick={goToPrevious}
                    className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 text-black hover:text-gray-600 transition-colors duration-200"
                    aria-label="Previous image"
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 text-black hover:text-gray-600 transition-colors duration-200"
                    aria-label="Next image"
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>

                {/* Images Container */}
                <div
                    className="flex transition-transform duration-300 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="w-full h-full flex-shrink-0 relative"
                        >
                            <Image
                                src={image}
                                alt={`${eventName} - Image ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>

                {/* Subtle Vertical Dividers */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="w-full h-full flex">
                        <div className="w-1/6 border-r border-gray-400 opacity-30"></div>
                        <div className="w-2/3"></div>
                        <div className="w-1/6 border-l border-gray-400 opacity-30"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollableImages;
