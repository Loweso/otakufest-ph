import { sendEmail } from '@/utils/mail.utils';
import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import path from 'path';

export async function POST(request: Request) {
    const {
        companyName,
        contactPerson,
        email,
        phone,
        businessType,
        inquiryType,
        message,
    } = await request.json();

    const htmlTemplate = readFileSync(
        path.join(process.cwd(), 'template', 'businessEmailTemplate.html'),
        'utf-8'
    );

    const emailContent = htmlTemplate
        .replace('{{companyName}}', companyName)
        .replace('{{contactPerson}}', contactPerson)
        .replace('{{email}}', email)
        .replace('{{phone}}', phone)
        .replace('{{businessType}}', businessType)
        .replace('{{inquiryType}}', inquiryType)
        .replace('{{message}}', message);

    const sender = {
        name: 'Otakufest Business Inquiry',
        address: 'no-reply@otakufestph.com',
    };

    const receipients = [
        {
            name: 'Bettina Ligero',
            address: 'ligerobettina@gmail.com',
        },
    ];

    try {
        const result = await sendEmail({
            sender,
            receipients,
            subject: `Business Inquiry — ${inquiryType}`,
            message,
            html: emailContent,
        });

        return NextResponse.json({ message: result.accepted }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: `Error: ${error}` },
            { status: 500 }
        );
    }
}
