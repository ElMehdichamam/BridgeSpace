const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth.middleware");
const { searchUsers } = require("../controllers/user.controller");

router.get("/search", verifyToken, searchUsers);

module.exports = router;
