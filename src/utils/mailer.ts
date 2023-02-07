import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    host: 'c1831459.ferozo.com',
    port: 465,
    secure: true,
    auth: {
        user: "hi@devschool.com.ar",
        pass: process.env.MAILER_PASS
    }
});

let mailOptions = {
    from: 'hi@devschool.com.ar',
    to: '',
    subject: '',
    text: ''
  };

export const sendMail = async (to:string, subject:string, message: string) => {
    mailOptions.to = to;
    mailOptions.subject = subject;
    mailOptions.text = message;
    try {
        const sended = await transporter.sendMail(mailOptions);
        console.log(sended);
    } catch (error) {
        console.error(error)
    }
}
