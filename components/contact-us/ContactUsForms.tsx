'use client';

import React, { useState } from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import Loader from '../generics/Loader';

interface FormValues {
    name: string;
    email: string;
    concern: string;
    question: string;
}

export const ContactUsForms = () => {
    const [formData, setFormData] = useState<FormValues>({
        name: '',
        email: '',
        concern: '',
        question: '',
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
        fetch('/api/send', {
            method: 'POST',
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => alert('Concern Sent!'))
            .catch((error) =>
                alert('Concern was not sent, there was a problem on our end')
            )
            .finally(() => setIsLoading(false));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!formData.concern) {
            alert('Please select a concern.');
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
                        name="name"
                        placeholder="Name..."
                        value={formData.name}
                        onChange={handleChange}
                        className="py-2 px-4 w-full rounded-md"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail Address..."
                        value={formData.email}
                        onChange={handleChange}
                        className="py-2 px-4 w-full  rounded-md"
                    />
                </div>
                <div>
                    <select
                        name="concern"
                        className="py-2 px-4  w-full rounded-md required bg-white"
                        value={formData.concern}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled hidden>
                            - Select Concern -
                        </option>

                        <option value="general">General Inquiry</option>
                        <option value="event_info">
                            Event Information & Schedule
                        </option>
                        <option value="competition">
                            Competition Concerns
                        </option>
                        <option value="competition_registration">
                            Competition Registration Help
                        </option>
                        <option value="artist_alley">
                            Artist Alley Inquiries
                        </option>
                        <option value="tickets_merch">
                            Tickets & Merchandise
                        </option>
                        <option value="sponsorship">
                            Sponsor & Partnership Inquiries
                        </option>
                        <option value="technical">
                            Website / Technical Issue
                        </option>
                        <option value="content_correction">
                            Content Correction Request
                        </option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <textarea
                    name="question"
                    className="h-32 rounded-md py-2 px-4"
                    placeholder="Your question here..."
                    value={formData.question}
                    onChange={handleChange}
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
