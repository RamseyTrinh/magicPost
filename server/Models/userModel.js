const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

//name, email, password, confirmPassword, photo
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Vui lòng nhập tên nhân viên"],
    trim: true,
    maxLength: 60,
    validate: {
      validator: function (value) {
        return validator.isAlpha(
          vietnameseString.format(value).split(" ").join("")
        );
      },
      message: (props) => `${props.value} không phải tên hợp lệ`,
    },
  },
  phoneNumber: {
    type: Number,
    trim: true,
    required: [true, "Vui lòng nhập số điện thoại"],
    validate: {
      validator: function (value) {
        // Phone number has 10 digits
        return /^[0-9]{10}$/.test(value);
      },
      message: (props) => `${props.value} không phải số điện thoại hợp lệ`,
    },
    unique: true,
  },

  email: {
    type: String,
    required: [true, "Vui lòng nhập email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Không phải địa chỉ email hợp lệ"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password."],
    minlength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password."],
    validate: {
      validator: function (val) {
        return val == this.password;
      },
      message: "Password does not match",
    },
  },
  role: {
    type: String,
    enum: {
      values: ["admin", "host1", "host2", "employee1", "employee2"],
      message: (props) => `${props.value} không phải vai trò hợp lệ`,
    },
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  //encrypt the password before saving
  this.password = await bcrypt.hash(this.password, 8);

  this.confirmPassword = undefined;
  next();
});

userSchema.methods.comparePasswordInDB = async function (pswd, pswdDB) {
  return await bcrypt.compare(pswd, pswdDB);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
