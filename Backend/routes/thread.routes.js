const express = require("express");
const router = express.Router();

const { createThread, getThreadsByProject, deleteThread } = require("../controllers/thread.controller");

const verifyToken = require("../middleware/auth.middleware");
const validateMiddleware = require("../middleware/validate.middleware");
const threadSchema = require("../validators/thread.validator");

router.post("/", verifyToken, validateMiddleware(threadSchema), createThread);
router.get("/:projectId", verifyToken, getThreadsByProject);
router.delete("/:id", verifyToken, deleteThread);

module.exports = router;