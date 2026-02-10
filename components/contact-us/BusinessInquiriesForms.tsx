'use client';

import React, { useState } from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import Loader from '../generics/Loader';

interface BusinessFormValues {
    companyName: string;
    contactPerson: string;
    email: string;
    phone: string;
    businessType: string;
    inquiryType: string;
    message: string;
}

export const BusinessInquiriesForms = () => {
    const [formData, setFormData] = useState<BusinessFormValues>({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        businessType: '',
        inquiryType: '',
        message: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendEmail = () => {
        setIsLoading(true);
        fetch('/api/send-business', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => alert('Business Inquiry Sent!'))
            .catch((error) =>
                alert('Inquiry was not sent, there was a problem on our end')
            )
            .finally(() => setIsLoading(false));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!formData.businessType || !formData.inquiryType) {
            alert('Please select both business type and inquiry type.');
            return;
        }
        sendEmail();
    };

    return (
        <>
            <form className="flex flex-col gap-y-5 text-black font-lato w-[90%]">
                <div>
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name..."
                        value={formData.companyName}
                        onChange={handleChange}
                        className="py-2 px-4 w-full rounded-md"
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="contactPerson"
                        placeholder="Contact Person..."
                        value={formData.contactPerson}
                        onChange={handleChange}
                        className="py-2 px-4 w-full rounded-md"
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail Address..."
                        value={formData.email}
                        onChange={handleChange}
                        className="py-2 px-4 w-full rounded-md"
                        required
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number..."
                        value={formData.phone}
                        onChange={handleChange}
                        className="py-2 px-4 w-full rounded-md"
                        required
                    />
                </div>
                <div>
                    <select
                        name="businessType"
                        className="py-2 px-4 w-full rounded-md required bg-white"
                        value={formData.businessType}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled hidden>
                            - Business Type -
                        </option>
                        <option value="sponsor">Sponsor</option>
                        <option value="vendor">Vendor/Exhibitor</option>
                        <option value="media">Media Partner</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <select
                        name="inquiryType"
                        className="py-2 px-4 w-full rounded-md required bg-white"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled hidden>
                            - Inquiry Type -
                        </option>
                        <option value="partnership">
                            Partnership Opportunity
                        </option>
                        <option value="sponsorship">Sponsorship Package</option>
                        <option value="vendor-booth">
                            Vendor Booth Rental
                        </option>
                        <option value="media-coverage">Media Coverage</option>
                        <option value="collaboration">
                            Event Collaboration
                        </option>
                        <option value="general">
                            General Business Inquiry
                        </option>
                    </select>
                </div>
                <textarea
                    name="message"
                    className="h-32 rounded-md py-2 px-4"
                    placeholder="Please describe your business inquiry, partnership proposal, or specific requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button
                    type="submit"
                    className="w-full border-4 rounded-md px-4 py-2 mb-3 text-white flex items-center text-xl font-bold hover:bg-white hover:text-site-main hover:border-site-main hover:scale-105 duration-200"
                    onClick={handleSubmit}
                >
                    <RiMailSendLine size={25} />
                    <div className="flex-grow text-center pr-3">
                        <p>Submit</p>
                    </div>
                </button>
            </form>
            <Loader isLoading={isLoading} />
        </>
    );
};
