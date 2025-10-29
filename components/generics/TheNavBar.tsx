import React from 'react';
import Link from 'next/link';
import Routes from '@/enums/routes';

interface PropsInterface {
    setIsNavbarDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TheNavBar = (props: PropsInterface) => {
    const { setIsNavbarDropdownOpen } = props;
    return (
        <>
            <Link
                href="/#guestSection"
                className="hover:scale-110 duration-200"
                onClick={() => setIsNavbarDropdownOpen(false)}
            >
                Guests
            </Link>
            <Link
                href="/#shirtSection"
                className="hover:scale-110 duration-200"
                onClick={() => setIsNavbarDropdownOpen(false)}
            >
                Merch
            </Link>
            <Link
                href="/#eventSection"
                className="hover:scale-110 duration-200"
                onClick={() => setIsNavbarDropdownOpen(false)}
            >
                Events
            </Link>
            <Link
                href={Routes.FAQS}
                className="hover:scale-110 duration-200"
                onClick={() => setIsNavbarDropdownOpen(false)}
            >
                FAQs
            </Link>
            <Link
                href={Routes.CONTACT_US}
                onClick={() => setIsNavbarDropdownOpen(false)}
            >
                <div className="md:bg-white md:px-5 md:py-2 md:rounded-lg md:text-site-main md:border md:hover:bg-site-main md:hover:border-site-secondary md:hover:text-site-secondary md:duration-200 hover:scale-110 duration-200">
                    Contact Us
                </div>
            </Link>
        </>
    );
};

export default TheNavBar;
