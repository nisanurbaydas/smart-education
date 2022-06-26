const express = require('express');
const { body } = require('express-validator');

const authMiddleware = require('../middlewares/auth');
const authController = require('../controllers/authController');
const User = require('../models/User');

const router = express.Router();

router.route('/signup').post(
  [
    body('name').not().isEmpty().withMessage('Please enter your name'),
    body('email')
      .isEmail()
      .withMessage('Please enter valid email')
      .custom((userEmail) => {
        return User.findOne({ email: userEmail }).then((user) => {
          if (user) {
            return Promise.reject('Email is already exists!');
          }
        });
      }),
    body('password').not().isEmpty().withMessage('Please enter password'),
  ],
  authController.createUser
); // http://localhost:3000/users/signup
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);
router.route('/dashboard').get(authMiddleware, authController.getDashboardPage);
router.route('/:id').delete(authController.deleteUser);

module.exports = router;
