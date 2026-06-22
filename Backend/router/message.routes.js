const express = require("express");
const router = express.Router();

const { createMessage, getMessagesByThread, deleteMessage } = require("../controllers/message.controller");
const verifyToken = require("../middleware/auth.middleware");
const validateMiddleware = require("../middleware/validate.middleware");
const messageValid = require("../validators/message.validator");

router.post("/", verifyToken, validateMiddleware(messageValid), createMessage);
router.get("/:threadId", verifyToken, getMessagesByThread);
router.delete("/:id", verifyToken, deleteMessage);

module.exports = router;