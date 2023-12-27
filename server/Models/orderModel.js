const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  packagesId: {
    type: String,
    required: true,
    unique: true,
  },
  fromtransactionPoint: {
    type: String,
    required: true,
  },
  fromWareHouse: {
    type: String,
    required: true,
  },
  totransactionPoint: {
    type: String,
    required: true,
  },
  toWareHouse: {
    type: String,
    required: true,
  },
  confirmDate: {
    type: String,
    required: true,
  },
  transferDate: {
    type: String,
    required: true,
  },
  shippingDate: {
    type: String,
    requied: true,
  },
  done: {
    type: Boolean,
    require: true,
  },
});
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
