const { body, validationResult } = require('express-validator');
const validations = [
    body('password').notEmpty().withMessage('You have to write a password'),
    body('email')
        .notEmpty().withMessage('You have to write an email').bail()
        .isEmail().withMessage('You must enter a valid email format'),


]
const validationsProccess = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    else {
        next()
    }
}
module.exports = {
    validations,
    validationsProccess
}

