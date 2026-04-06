import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// ⚡ Check if model already exists
const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export default Contact;