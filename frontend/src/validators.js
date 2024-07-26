// validators.js
const { body } = require('express-validator');

const userRegistrationValidationRules = () => {
    return [
        body('username')
            .isLength({ min: 2 })
            .withMessage('Name must be at least 2 characters long'),
        body('email')
            .isEmail()
            .withMessage('Email must be valid'),
        body('password')
            .isLength({ min: 8 })
            .withMessage('Password must be at least 8 characters long'),
        body('confirmPassword')
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('Passwords do not match');
                }
                return true;
            }),
        body('profilePicture')
            .custom((value, { req }) => {
                if (!req.file) {
                    throw new Error('Image file is required');
                }
                const validMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
                if (!validMimeTypes.includes(req.file.mimetype)) {
                    throw new Error('Invalid image file format');
                }
                return true;
            })
    ];
};

const userLoginValidationRules = () => {
    return [
        body('email')
            .isEmail()
            .withMessage('Email must be valid'),
        body('password')
            .notEmpty()
            .withMessage('Password is required')
    ];
};

module.exports = {
    userRegistrationValidationRules,
    userLoginValidationRules
};