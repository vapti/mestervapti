import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, number, message } = req.body;

    // Konfigurer Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // eller en anden e-mail service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_TO, // Den e-mail, du vil sende til
        subject: `Ny besked fra ${name}`,
        text: message,
        html: `<p><strong>Navn:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Telfonnummer:</strong> ${number}</p>
               <p><strong>Message:</strong></p><p>${message}</p>`,
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });    
  }
}
