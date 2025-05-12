"use server"

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (name: string, email: string, message: string) => {
    await resend.emails.send({
        to: 'osamalghoul2@gmail.com',
        from: `${name} <${email}>`,
        subject: 'New message from UPAL website',
        html: `<p>${message}</p>`,
    });
}
