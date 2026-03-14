import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  productName: String,

  image: String,

  price: Number,

  status: {
    type: String,
    default: "Pending"
  },

  date: {
    type: Date,
    default: Date.now
  }

});

export default mongoose.model("Order", orderSchema);