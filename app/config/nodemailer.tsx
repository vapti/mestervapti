const nodemailer = require("nodemailer");

const email = process.env.EMAIL_USER;
const pass =  process.env.EMAIL_PASS;


export const transporter = nodemailer.createTransport({
    service: 'gmail', // eller en anden e-mail service
    auth: {
      user: email,
      pass: pass,
    },
});

export const mailOptions = {
    from: email,
    to: email,
};