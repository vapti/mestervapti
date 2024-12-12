import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { NextApiRequest, NextApiResponse } from "next";

dotenv.config();

interface EmailRequestBody {
  name: string;
  email: string;
  number?: string;
  message: string;
}

const enableCors = (req: NextApiRequest, res: NextApiResponse): void => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === "OPTIONS") {
    enableCors(req, res);
    res.status(200).end();
  }

  if (req.method === "POST") {
    console.log("Request received");
    enableCors(req, res);
    const { name, email, number, message }: EmailRequestBody = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ message: "Navn, e-mail og besked er påkrævet." });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.sdmchiptuning.dk', // Erstat med din mailserver, hvis du bruger noget specifikt
      port: 465, // Standard SMTP-port
      secure: true, // Brug 'true' for 465, 'false' for 587
      auth: { 
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      console.log("Attempting to send email...");
      await transporter.sendMail({
        from: email,
        replyTo: email,
        to: process.env.EMAIL_TO,
        subject: `Ny besked fra ${name}`,
        text: message,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>Ny Kontaktformular Besked</h2>
            <p><strong>Navn:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefonnummer:</strong> ${number || "Ikke angivet"}</p>
            <p><strong>Besked:</strong></p>
            <p>${message}</p>
          </div>
        `,
      });

      console.log("Email sent successfully");
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error: any) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ message: "Error sending email: " + error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
