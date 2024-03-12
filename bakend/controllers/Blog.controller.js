const { Category } = require('../models/Category');

const { Article } = require('../models/Article');


exports.createOneCategory = async (req, res) => {
	try {
		const doc = await Category.create(req.body);

		res.status(201).json(doc);
	} catch (error) {
		res.status(400).json(error);
	}

};

exports.findAllCategory = async (req, res) => {
	let data = await Category.find({}).sort({ _id: -1 });;
	res.json(data);
};

exports.findByFilterCategory = async (req, res) => {

	let data = await Category.find(req.body);;
	res.json(data);
};

exports.findOneCategory = async (req, res) => {
	let data = await Category.findOne({ _id: req.params.id });
	res.json(data);
};

exports.updateOneCategory = async (req, res) => {
	const data = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
	res.json(data);
};

exports.deleteCategory = async (req, res) => {
	try {
		await Category.deleteOne({ _id: req.params.id });
		res.status(200).json('category deleted successfully');
	} catch (error) {
		res.status(500).json({ status: 500, msg: error.message });
	}
};



exports.createOneArticle = async (req, res) => {
	try {
		const doc = await Article.create(req.body);

		res.status(201).json(doc);
	} catch (error) {
		res.status(400).json(error);
	}

};

exports.findAllArticle = async (req, res) => {
	let data = await Article.find({}).sort({ _id: -1 });;
	res.json(data);
};

exports.findByFilterArticle = async (req, res) => {

	let data = await Article.find(req.body);;
	res.json(data);
};

exports.findOneArticle = async (req, res) => {
	let data = await Article.findOne({ _id: req.params.id });
	res.json(data);
};

exports.updateOneArticle = async (req, res) => {
	const data = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
	res.json(data);
};

exports.deleteArticle = async (req, res) => {
	try {
		await Article.deleteOne({ _id: req.params.id });
		res.status(200).json('category deleted successfully');
	} catch (error) {
		res.status(500).json({ status: 500, msg: error.message });
	}
};

