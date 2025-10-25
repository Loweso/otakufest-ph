import React from 'react';
import { ContactUsContainer } from '@/components/contact-us/ContactUsContainer';
import Link from 'next/link';
import Routes from '@/enums/routes';

const ContactUs = () => {
    return (
        <section className="flex flex-col gap-5 min-h-screen justify-center items-center bg-site-blue-100/80 px-4 sm:px-8 lg:px-20 pb-10 pt-[7.5rem] relative bg-theme">
            <ContactUsContainer />

            <div className="mt-2 text-center">
                <span className="text-site-main text-lg lg:text-xl leading-none">
                    Want to partner with us?{' '}
                </span>
                <Link
                    href={Routes.BUSINESS_INQUIRIES}
                    className="inline-block text-site-main text-lg lg:text-xl font-bold underline leading-none hover:text-site-main/80 hover:scale-105 transition duration-200"
                >
                    Inquire now!
                </Link>
            </div>
        </section>
    );
};

export default ContactUs;
