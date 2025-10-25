import React from 'react';
import { BusinessInquiriesForms } from './BusinessInquiriesForms';
import Image from 'next/image';
import { OF24_BANANA, OF24_FISH } from '@/enums/imageUrls';

export const BusinessInquiriesContainer = () => {
    return (
        <div className="w-[18rem] xs:w-full sm:w-4/5 lg:w-3/5 xl:w-2/5 flex flex-col bg-site-main rounded-3xl items-center p-3 relative">
            <div className="flex flex-col items-center mt-6 mb-5 font-yaldevi w-full">
                <h2 className="font-bold text-3xl">Business Inquiries</h2>
                <h3 className="text-lg">Partnerships & Collaborations</h3>
            </div>
            <BusinessInquiriesForms />

            <Image
                src={OF24_BANANA}
                alt="guest"
                width={220}
                height={180}
                className="absolute lg:right-[-180px] bottom-[-10px] sm:right-[-100px] invisible sm:visible sm:w-36 lg:w-56"
            />
            <Image
                src={OF24_FISH}
                alt="guest"
                width={320}
                height={300}
                className="absolute lg:right-[-240px] lg:bottom-[-90px] sm:right-[-150px] sm:bottom-[-75px] invisible sm:visible sm:w-60 lg:w-80"
            />
        </div>
    );
};
