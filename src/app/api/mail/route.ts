import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,  // Sender Name with Email
            to: process.env.EMAIL_USER,    // Receiver
            subject: `📩 New Message from ${name}`, // Subject with an emoji for better visibility
            replyTo: email,  // So that replies go to the sender
            text: `You have received a new message from your portfolio contact form.
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
        
        ----------------------
        Sent from your website contact form.`,
            html: `
                <div style="font-family: Arial, sans-serif; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
                    <h2 style="color: #333;">New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Message:</strong></p>
                    <blockquote style="background: #f9f9f9; padding: 10px; border-left: 3px solid #007bff;">${message}</blockquote>
                    <hr>
                    <p style="font-size: 12px; color: #666;">This email was sent from your portfolio contact form.</p>
                </div>
            `,
        });

        return NextResponse.json({ message: "Thank you for your interest, w'll connect you soon", title: "Email sent successfully!" }, { status: 200 },);
    } catch (error) {
        return NextResponse.json({ message: "Failed to send email. Try after sometime", error, title: "Error sending email" }, { status: 500 });
    }
}