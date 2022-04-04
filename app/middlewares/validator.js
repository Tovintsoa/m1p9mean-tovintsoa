const { check } = require('express-validator');
const userController = require('../controllers/user.controllers');
module.exports = {

    validateEmail: check('email')

    // To delete leading and triling space
        .trim()

        // Normalizing the email address
        .normalizeEmail()

        // Checking if follow the email
        // address formet or not
        .isEmail()

        // Custom message
        .withMessage('Invalid email')

        // Custom validation
        // Validate email in use or not
        .custom(async (email) => {
            const existingUser =
                await userController.findEmail(email);
            if (existingUser) {
                throw new Error('Email utilisé')
            }
        })
};