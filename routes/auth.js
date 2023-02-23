const express = require('express');
const authRouter = express.Router();
// const { validateBody, authenticate } = require('../../middlewares');
const { validation } = require('../middlewares');
const { signupSchema } = require('../schemas/auth');
const { controllerWrapper } = require('../helpers');
const { signupUser } = require('../controllers/auth');

authRouter.post('/signup', validation(signupSchema), controllerWrapper(signupUser));
// authRouter.post('/register', validateBody(registerSchema), controllerWrapper(registerUser));

// authRouter.post('/login', validateBody(loginSchema), controllerWrapper(loginUser));

// authRouter.post('/logout', authenticate, controllerWrapper(logoutUser));

module.exports = authRouter;