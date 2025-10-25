import React from 'react';
import { BusinessInquiriesContainer } from '@/components/contact-us/BusinessInquiriesContainer';
import Link from 'next/link';
import Routes from '@/enums/routes';

const BusinessInquiries = () => {
    return (
        <section className="flex flex-col gap-5 min-h-screen justify-center items-center bg-site-blue-100/80 px-4 sm:px-8 lg:px-20 pb-10 pt-[7.5rem] relative bg-theme">
            <BusinessInquiriesContainer />

            <div className="mt-2 text-center">
                <span className="text-site-main text-lg lg:text-xl leading-none">
                    Got any concerns?{' '}
                </span>
                <Link
                    href={Routes.CONTACT_US}
                    className="inline-block text-site-main text-lg lg:text-xl font-bold underline leading-none hover:text-site-main/80 transition duration-200"
                >
                    Contact us.
                </Link>
            </div>
        </section>
    );
};

export default BusinessInquiries;
