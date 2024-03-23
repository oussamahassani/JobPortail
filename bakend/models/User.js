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
  image: {
    type: String, default: ''
  },
  role: {
    type: String, required: true,
    enum: [
      'ADMIN',
      'CANDIDAT',
      'EMPLOYER'
    ]
  },
  job: String,
  aboutMe: String,
  cv: String,
  profile_type: String,
  interests: [{ name: String }],
  languages: [{
    name: String,
    level: String,
    certificateID: Boolean
  }],
  experience: [{
    title: String,
    description: String,
    dateStart: String,
    dateEnd: String,
    companyName: String
  }],
  certificates: [{
    certificateID: String,
    title: String,
    expeditionDate: String,
    expeditionCompany: String
  }],
  education: [{
    title: String,
    educationType: String,
    dateStart: String,
    dateEnd: String,
    institutionName: String
  }],
  status: {
    type: String,
    default: 'active'
  },
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

module.exports = { UserSchema, User };
