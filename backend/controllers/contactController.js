import Contact from "../Models/contact.js"
import nodemailer from "nodemailer";

export const sendContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1️⃣ Save to DB
    const newContact = await Contact.create({ name, email, message });

    // 2️⃣ Email send
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      html: `
        <h2>New Message</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    res.json({ success: true, data: newContact });

  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};