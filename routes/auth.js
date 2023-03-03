const express = require('express');
const authRouter = express.Router();
const { validation, authentication } = require('../middlewares');
const { controllerWrapper } = require('../helpers');
const { signupSchema, loginSchema, verifySchema, updateSchema, profileSchema } = require('../schemas/auth');
const { signupUser, loginUSer, verifyUser, updateUser, getUser, updatePassword, logoutUser } = require('../controllers/auth');

authRouter.post('/signup', validation(signupSchema), controllerWrapper(signupUser));

authRouter.post('/login', validation(loginSchema), controllerWrapper(loginUSer));

authRouter.post('/verify', validation(verifySchema), controllerWrapper(verifyUser));

authRouter.get('/:email', controllerWrapper(getUser));

authRouter.put('/update/:id', validation(updateSchema), controllerWrapper(updatePassword));

authRouter.patch('/update', authentication, validation(profileSchema), controllerWrapper(updateUser));

authRouter.post('/logout', authentication, controllerWrapper(logoutUser));

module.exports = authRouter;