const express = require("express");

const router = express.Router();

const  validateMiddleware  = require("../middleware/validate.middleware");
const projectSchema = require("../validators/project.validator");
const verifyToken = require("../middleware/auth.middleware");
const  { 
        createProject,
        getAllProjects,
        getProjectById,
        updateProject,
        removeProject
        } = require("../controllers/project.controller");




router.get('/',verifyToken,validateMiddleware(projectSchema),getAllProjects);
router.get('/:id',verifyToken,validateMiddleware(projectSchema),getProjectById);
router.post('/',verifyToken,validateMiddleware(projectSchema),createProject);
router.put('/:id',verifyToken,validateMiddleware(projectSchema),updateProject);
router.delete('/:id',verifyToken,validateMiddleware(projectSchema),removeProject);

module.exports = router;