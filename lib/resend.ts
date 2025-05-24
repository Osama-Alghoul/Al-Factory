"use server"

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (name: string, email: string, message: string) => {
    await resend.emails.send({
        to: 'info@arabian-industry.com',
        from: `UPAL <onboarding@resend.dev>`,
        subject: 'New message from UPAL website',
        html: `<p>Hello my name is: ${name} <br />
        Gmail: ${email} <br />
         ${message}</p>`,
    });
}
