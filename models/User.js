const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  password: {
    type: String, required: true
  },
  email: {
    type: String, unique: true, required: true
  },
  phone: {
    type: String
  },
  image : {
    type : String , default :'' 
  },
  role: {
    type: String, required: true
  },
  status: {
    type: String,
    default: 'active'
  },
},{ timestamps: true });

const User = mongoose.model("User", UserSchema);

module.exports = { UserSchema, User };
