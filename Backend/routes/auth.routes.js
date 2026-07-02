const express = require("express");

const router = express.Router();

const {loginController,registerController,getMe}= require("../controllers/auth.controller");

const verifyToken = require("../middleware/auth.middleware");
const validateMiddleware = require("../middleware/validate.middleware");
const { registerSchema, logInSchema } = require("../validators/auth.validator");

router.post('/register',validateMiddleware(registerSchema),registerController);

router.post('/login',validateMiddleware(logInSchema),loginController);

router.get('/me',verifyToken,getMe);

module.exports = router;