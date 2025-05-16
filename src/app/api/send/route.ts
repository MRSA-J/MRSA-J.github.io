import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
// Use a placeholder API key for build process if environment variable is not set
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY || 'placeholder_api_key_for_build');

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { name, email, subject, message } = await request.json();
    
    // Validate the input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if we're using the placeholder API key for debugging purposes
    if (process.env.NEXT_PUBLIC_RESEND_API_KEY === undefined) {
      console.warn('Using placeholder Resend API key. Emails will not be sent.');
      // Return a mock success response for build/dev environments
      return NextResponse.json({ 
        success: true, 
        data: { id: 'mock-email-id', message: 'Mock email response for build/development' } 
      });
    }

    // Send the email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'chen_wei@alumni.brown.edu', // Change this to your email
      subject: `Portfolio Contact: ${subject}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `,
      html: `
<div>
  <h2>New message from your portfolio contact form</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <p><strong>Message:</strong> ${message}</p>
</div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 