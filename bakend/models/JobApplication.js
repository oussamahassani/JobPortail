const mongoose = require("mongoose");

const JobApplicationSchema = new mongoose.Schema({
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'applcation should belong to an applicant'],
  },
  status: {
    type: String,
    enum: ['applied', 'In Consideration', 'Not Selected'],
 
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'job',
    required: [true, 'application should belon to a job'],
  },
  questionsAnswers: [String],

}, { timestamps: true });

const jobApplication = mongoose.model("jobApplication", JobApplicationSchema);

module.exports = { JobApplicationSchema, jobApplication };
