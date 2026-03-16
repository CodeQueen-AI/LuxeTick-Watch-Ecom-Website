// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   productName: { type: String, required: true },
//   image: { type: String },
//   price: { type: Number, required: true },
//   status: { type: String, default: "Pending" },
//   date: { type: Date, default: Date.now },
// });

// const Order = mongoose.model("Order", orderSchema);

// export default Order;















import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  productName: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },

  price: {
    type: Number,
    required: true,
  },

  quantity: {
    type: Number,
    default: 1,
  },

  status: {
    type: String,
    default: "Pending",
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;