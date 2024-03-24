const user = require('../controllers/users.controller.js');
const validationLogin = require('../validation/loginvalidation.js');
const signupValidation = require('../validation/signupvalidation.js')
var router = require('express').Router();
const middleware = require("../middlewares/auth");



router.get('/me', middleware.verifyToken, user.me);
router.patch('/me', middleware.verifyToken, user.update);
router.patch('/update_password', middleware.verifyToken, user.updatePassword);
router.post('/forget_password', user.forgetPassword);
router.delete('/:id_user', user.delete);
router.get('/', user.findAll);
router.post('/filter', user.findByFilter);
router.post('/contactUs', user.contact);
router.get('/role/:role', user.findAllByRole);
router.post('/signup', signupValidation, validationLogin.validationsProccess, user.signup);
router.post('/login', validationLogin.validations, validationLogin.validationsProccess, user.login);
router.get('/:id', user.findOne);
router.patch('/:id', user.updateOne);

module.exports = router

