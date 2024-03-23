const mongoose = require("mongoose");


const jobSchema = new mongoose.Schema({
  recruiter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'job must belong to a recruiter']
  },
 
  title: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: [true, 'job must have a title'],
  },
   company:{
      type: String,
   },
   location:{
     type: String,
   },
   modality:{
    type: String,
   },
   release_date:{
    type: String,
   },
   agreement:{
    type: String,
   },
   work_time:{
    type: String,
   },
  experience: {
    type: String,
    enum: [
      'No experience',
      'Less than 1 year',
      '1 year',
      '2 years',
      '3 years',
      '4 years',
      '5 years',
      'More than 5 years',
    ],
   // required: [true, 'job must have experience'],
  },
  education: {
    type: String,
    enum: [
      'Student',
      'Entry Level',
      'Experienced',
      'Manager',
      'Degree',
      'Senior Management',
    ],
    //required: [true, 'job must have career level'],
  },
  salary: {
    type: String,
    required: [true, 'job must have salary'],
  },
  category: {
    type: String,
    enum: [
      'Accounting/Finance',
      'Administration',
      'Banking',
      'R&D/Science',
      'Engineering - Construction/Civil/Architecture',
      'Business Development',
      'Creative/Design/Art',
      'Customer Service/Support',
      'Writing/Editorial',
      'Hospitality/Hotels/Food Services',
      'Human Resources',
      'Installation/Maintenance/Repair',
      'IT/Software Development',
      'Legal',
      'Logistics/Supply Chain',
      'Operations/Management',
      'Manufacturing/Production',
      'Marketing/PR/Advertising',
      'Medical/Healthcare',
      'Other',
      'Project/Program Management',
      'Quality',
      'Analyst/Research',
      'Sales/Retail',
      'Media/Journalism/Publishing',
      'Sports and Leisure',
      'Fashion',
      'Pharmaceutical',
      'Tourism/Travel',
      'Purchasing/Procurement',
      'Strategy/Consulting',
      'C-Level Executive/GM/Director',
      'Engineering - Telecom/Technology',
      'Engineering - Mechanical/Electrical',
      'Engineering - Oil & Gas/Energy',
      'Engineering - Other',
      'Education/Teaching',
      'Training/Instructor',
      'Engineers and Technics',
      'Construction'

    ],
    required: [true, 'job must have a field'],
  },
  description: {
    type: String,
    maxlength: 5000,
    minlength: 5,
    required: [true, 'job must have a description'],
  },
  jobRequirement: {
    type: String,
    maxlength: 1000,
    minlength: 5,
  },
  skills: [
    {
      type: String,
      minlength: 1,
      maxlength: 50,
      index: {
        unique: true,
        partialFilterExpression: { skill: { $type: 'string' } },
      },
    },
  ],

}, { timestamps: true });

const Job = mongoose.model("Job", jobSchema);

module.exports = { jobSchema, Job };
