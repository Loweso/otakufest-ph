import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Zoom } from 'react-awesome-reveal';
import { link } from 'fs';

interface IProps {
    slug?: string;
    imageUrl: string;
    blackImageURL: string;
    name: string;
    eventURL: string;
    isRevealed: boolean;
}

const EventImage = (props: IProps) => {
    const { imageUrl, blackImageURL, name, eventURL, isRevealed, slug } = props;
    const linkHref = slug ? `/events/${slug}` : eventURL;

    const imageContent = (
        <figure className="relative aspect-square w-28 sm:w-50 md:w-64 lg:w-70 hover:scale-105 duration-200">
            <Image
                src={isRevealed ? imageUrl : blackImageURL}
                alt="guest"
                fill
                className="object-cover"
            />
        </figure>
    );

    return (
        <Zoom duration={300}>
            <div className="flex flex-col items-center gap-2 text-center text-md md:text-xl md:px-14 h-full">
                {isRevealed ? (
                    <Link href={eventURL}>{imageContent}</Link>
                ) : (
                    imageContent
                )}

                <div className="flex flex-col items-center flex-1 justify-start">
                    <p className="text-lg md:text-md lg:text-lg xl:text-xl uppercase font-bold text-sm/6 leading-none">
                        {isRevealed ? name : '??? Competition'}
                    </p>
                </div>

                {isRevealed && (
                    <div className="flex flex-col lg:flex-row gap-2 w-full justify-center self-baseline-last mt-2 px-2">
                        <Link
                            href={linkHref}
                            className="bg-white text-black px-2 py-1.5 sm:px-3 sm:py-2 rounded-full text-[9px] sm:text-[15px] md:text-xs font-semibold hover:bg-gray-200 transition whitespace-nowrap flex-shrink-0"
                        >
                            DETAILS & RULES
                        </Link>
                        <Link
                            href={`${eventURL}`}
                            className="bg-site-main text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-full text-[9px] sm:text-[15px] md:text-xs font-bold hover:bg-site-main/75 transition whitespace-nowrap flex-shrink-0"
                        >
                            REGISTER NOW
                        </Link>
                    </div>
                )}
            </div>
        </Zoom>
    );
};

export default EventImage;
