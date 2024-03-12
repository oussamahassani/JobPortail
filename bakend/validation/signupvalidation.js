const { body } = require('express-validator');
const validations = [
    body('password').notEmpty().withMessage('You have to write a password'),
    body('email')
        .notEmpty().withMessage('You have to write an email').bail()
        .isEmail().withMessage('You must enter a valid email format'),
    body('role').notEmpty().withMessage('You have to write a role'),
    body('firstname').notEmpty().withMessage('You have to write a firstname'),
    body('lastname').notEmpty().withMessage('You have to write a last name'),
    body('phone').notEmpty().withMessage('You have to write a phone'),

]

module.exports = validations

