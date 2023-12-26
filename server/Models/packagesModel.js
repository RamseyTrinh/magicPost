const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  packagesId: {
    type: String,
  },
  packagesStatus: {
    type: String,
  },
  createdDate: {
    type: String,
  },
  startLocation: {
    type: String,
  },
  endLocation: {
    type: String,
  },
  sender: {
    senderName: {
      type: String,
      required: [true, "Vui lòng nhập tên người gửi"],
    },
    senderPhone: {
      type: String,
      required: [true, "Vui lòng nhập số điện thoại người gửi"],
    },
    senderAddr: {
      type: String,
      require: [true, "Vui lòng nhập địa chỉ người gửi"],
    },
    senderAdd: {
      type: String,
    },
  },

  receiver: {
    receiverName: {
      type: String,
      required: [true, "Vui lòng nhập tên người nhận"],
    },
    receiverPhone: {
      type: String,
      required: [true, "Vui lòng nhập số điện thoại người nhận"],
    },
    receiverAddr: {
      type: String,
      require: [true, "Vui lòng nhập địa chỉ người nhận"],
    },
    receiverAdd: {
      type: String,
    },
  },

  package: {
    productType: {
      type: String,
      require: true,
      enum: {
        values: ["parcel", "document"],
      },
    },
    productName: {
      type: String,
      required: [true, "Vui lòng nhập tên kiện hàng"],
    },
    productValue: {
      type: String,
      required: [true, "Vui lòng nhập giá trị thực"],
    },
    productWeight: {
      type: String,
      required: [true],
    },
    // quantity: {
    //   type: String,
    //   required: [true],
    // },
    size: {
      length: {
        type: String,
      },
      width: {
        type: String,
      },
      height: {
        type: String,
      },
    },

    productCategory: {
      type: { type: String },
    },
  },

  payment: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },

  route: [
    {
      pointName: {
        type: String,
        //required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  currentPoint: {
    type: String,
    //require: true,
  }
});
const Packages = mongoose.model("Package", packageSchema);

module.exports = Packages;
