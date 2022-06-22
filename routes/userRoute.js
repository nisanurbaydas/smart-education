const express = require('express');

const authMiddleware = require('../middlewares/auth');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(authController.createUser); // http://localhost:3000/users/signup
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);
router.route('/dashboard').get(authMiddleware, authController.getDashboardPage);

module.exports = router;
