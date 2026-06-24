const express = require("express");

const router = express.Router();

const {loginController,registerController,getMe}= require("../controllers/auth.controller");

const verifyToken = require("../middleware/auth.middleware");

router.post('/register',registerController);

router.post('/login',loginController);

router.get('/me',verifyToken,getMe);

module.exports = router;