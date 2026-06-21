const express = require("express");

const router = express.Router();

const {loginController,registerController,getMe}= require("../controllers/auth.controller");

router.post('/register',registerController);

router.post('/login',loginController);

router.get('/me',getMe);

module.exports = router;