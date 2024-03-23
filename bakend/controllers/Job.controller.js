const { Job } = require('../models/Job');
const {jobApplication} = require('../models/JobApplication')

exports.createOneJob = async (req, res) => {
	try {
		const doc = await Job.create(req.body);

		res.status(201).json(doc);
	} catch (error) {
		res.status(400).json(error);
	}

};
exports.createManyJob = async (req, res) => {
	try {
		console.log("many")
		const doc = await Job.insertMany(req.body);

		res.status(201).json(doc);
	} catch (error) {
		console.log(error)
		res.status(400).json(error);
	}
}
exports.getManyJob = async (req, res) => {
	try {
	
		const doc = await Job.find({_id :{ $in: req.body.arrayOfIds  } });

		res.status(201).json(doc);
	} catch (error) {
		console.log(error)
		res.status(400).json(error);
	}
}
exports.findAllJob = async (req, res) => {
	let data = await Job.find({}).sort({ _id: -1 });;
	res.json(data);
};

exports.findByFilterJob = async (req, res) => {

	let data = await Job.find(req.body);;
	res.json(data);
};

exports.findOneJob = async (req, res) => {
	let data = await Job.findOne({ _id: req.params.id });
	res.json(data);
};

exports.updateOneJob = async (req, res) => {
	const data = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
	res.json(data);
};

exports.deleteJob = async (req, res) => {
	try {
		await Job.deleteOne({ _id: req.params.id });
		res.status(200).json('Job deleted successfully');
	} catch (error) {
		res.status(500).json({ status: 500, msg: error.message });
	}
};

exports.appliedOffert = async (req, res) => {
	try {
		await jobApplication.create(req.body);
		res.status(200).json('Job applied  successfully');
	} catch (error) {
		res.status(500).json({ status: 500, msg: error.message });
	}
};

