const {User} = require('../models/User');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

exports.test = async (req, res) => {
	res.json({hello : "hay"})
}


exports.getAllUsers = async  (req, res) =>{
	try {
	  const users = await User.find({}, {firstname: 1, lastname: 1, email: 1});
	  console.log("ggg")
	  res.status(200).send(users); 
	} catch (error) {
	  res.status(500).send(error);
	  console.log("ffff");
	  console.log(error);
	}
  }
  exports.getAllCoursByUser = async  (req, res) =>{
	try {
		let coursexiste = await User.findById({_id:req.body.iduser}, {cours:  1});
		if(coursexiste && coursexiste.cours.length >0){
			const users = await User.findById({_id:req.body.iduser}, {cours:  1}).populate(['cours']);
			res.status(200).send(users.cours); 
		
		}
		else{
			res.status(200).send([]); 
		}

	} catch (error) {
	  res.status(500).send(error);
	  console.log(error);
	}
  }
exports.findAll = async (req, res) => {
	let data = await User.find({}).sort({_id:-1}); // select * from Students ;
	res.json(data);
};
exports.findAllByRole = async (req, res) => {
	let role = req.params.role
	let data = await User.find({ role: role }); // select * from Students ;
	res.json(data);
};
exports.findByFilter = async (req, res) => {

	let data = await User.find(req.body); // select * from Students ;
	res.json(data);
};

exports.findOne = async (req, res) => {
	let data = await User.findOne({ _id: req.params.id }); // select * from Students where _id = req.params.id ;
	res.json(data);
};

exports.updateOne = async (req, res) => {
	const data = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
	res.json(data);
};
exports.me = async (req, res) => {
	let data = await User.findOne({ _id: req.userId }); // select * from Students where _id = req.params.id ;
	res.json(data);
};
exports.signup = async (req, res) => {
	const { email, password, role, firstname, lastname, phone,image } = req.body;
	if (!email || !password) res.status(400).json({ message: 'email or password is missing!' });
	else {
		const checkUser = await User.findOne({ email: email });
		if (checkUser) res.status(401).json({ message: 'User already exist' });
		else {

			/* let transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				port: 465,
				secure: true,
				auth: {
					user: 'yousrigrira17@gmail.com', // generated ethereal user
					pass: 'yosri1997**', // generated ethereal password
				},
			}); */

			//transport nodemailer avec service mailtrap
			var transporter = nodemailer.createTransport({
				host: "sandbox.smtp.mailtrap.io",
				port: 2525,
				auth: {
					user: "65b44edcb92d03",
					pass: "f60888b4928053"
				}
			});

			// send mail with defined transport object
			let info = await transporter.sendMail({
				from: 'jobwebsite', // sender address
				to: email, // list of receivers
				subject: 'Hello ✔', // Subject line
				html: '<b>Welcome to job website </b>', // html body
			});
			const entry = await User.create({
				email: email,
				password: bcrypt.hashSync(password, 8),
				firstname: firstname,
				role: role,
				lastname: lastname,
				phone : phone ,
				image:image,
			});
			res.status(200).json(entry);
		}
	}
};

exports.login = async (req, res) => {
	const { email, password, remeberMe } = req.body;
	if (!email || !password) res.status(400).json({ message: 'email or password is missing!' });
	else {
		const checkUser = await User.findOne({ email: email });
		if (!checkUser) res.status(401).json({ message: 'User not exist' });
		else {
			const checkPassword = bcrypt.compareSync(password, checkUser.password);
			if (checkPassword) {
				console.log(checkUser );
				let extend = 1;
				if (remeberMe) extend = 30;
				const token = jwt.sign({ id: checkUser.id }, 'secret', { expiresIn: 86400 });
				res.status(200).send({ auth: true, token: token,email:email,_id:checkUser._id,image:checkUser.image,firstname:checkUser.firstname,lastname:checkUser.lastname ,role:checkUser.role  });
			} else res.status(401).json({ message: 'wrong password' });
		}
	}
};
exports.update = async (req, res) => {
	const data = await User.findByIdAndUpdate(req.userId, req.body, { new: true });
	res.json(data);
};

exports.updatePassword = async (req, res) => {
	const { old_password, new_password, new_password_confirmed } = req.body;
	if (!new_password || !new_password_confirmed)
		res.status(401).json({ message: 'missing new password or new password confirmation' });
	else if (new_password != new_password_confirmed)
		res.status(401).json({ message: 'new password and new password confirmation are not the same' });
	else {
		if (new_password == old_password)
			res.status(401).json({ message: 'new password and old password can not be the same' });
		else {
			let user = await User.findOne({ _id: req.userId }); // select * from Students where _id = req.params.id ;
			const checkPassword = bcrypt.compareSync(old_password, user.password);
			if (!checkPassword) res.status(401).json({ message: 'old password is wrong' });
			else {
				await User.findByIdAndUpdate(req.userId, { password: bcrypt.hashSync(new_password, 8) }, { new: true });
				res.status(200).json({ message: 'password updated successfully' });
			}
		}
	}
};
exports.delete = async (req, res) => {
	try {
		await User.deleteOne({ _id: req.params.id_user });
		res.status(200).json('User deleted successfully');
	} catch (error) {
		res.status(500).json({ status: 500, msg: error.message });
	}
};

exports.contact = async (req, res) => {
	const { email, message, name} = req.body;
	if (!email || !message) res.status(400).json({ message: 'email or message is missing!' });
	else {
let tmplate ='<div><p><b>message de</b>'+email + '</p>'
tmplate += '<p> nom :  '+name+ ' </p>'
tmplate += '<p> message :  '+message+ ' </p>'
		
			var transporter = nodemailer.createTransport({
				host: "sandbox.smtp.mailtrap.io",
				port: 2525,
				auth: {
					user: "65b44edcb92d03",
					pass: "f60888b4928053"
				}
			});

			// send mail with defined transport object
			let info = await transporter.sendMail({
				from: 'jobWebSites', // sender address
				to: email, // list of receivers
				subject: 'contact Form ✔', // Subject line
				html: tmplate, // html body
			});

			res.status(200).json({message:"votre message a eté envoyer avec suceés"});
		
	}
};



