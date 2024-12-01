import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Enable CORS middleware
const enableCors = (req, res) => {
  // Replace with your frontend URL in production
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};


// api der ikke virker så godt
export default async function handler(req, res) {
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    enableCors(req, res);
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    enableCors(req, res);
    const { name, email, number, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required.' });
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    try {
      console.log('Attempting to send email...');
      await transporter.sendMail({
        from: process.env.EMAIL_USER, // Use your verified email as sender
        replyTo: email, // Set reply-to as the form submitter's email
        to: process.env.EMAIL_TO,
        subject: `Ny besked fra ${name}`,
        text: message,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>Ny Kontaktformular Besked</h2>
            <p><strong>Navn:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefonnummer:</strong> ${number || 'Ikke angivet'}</p>
            <p><strong>Besked:</strong></p>
            <p>${message}</p>
          </div>
        `,
      });

      console.log('Email sent successfully');
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email: ' + error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });    
  }
}