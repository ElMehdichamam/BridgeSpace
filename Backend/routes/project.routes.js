const express = require("express");

const router = express.Router();

const  validateMiddleware  = require("../middleware/validate.middleware");
const projectSchema = require("../validators/project.validator");

const verifyToken = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");

const  { 
        createProject,
        getAllProjects,
        getProjectById,
        updateProject,
        removeProject,
        addMember,
        removeMember
        } = require("../controllers/project.controller");

router.get('/',verifyToken,getAllProjects);
router.get('/:id',verifyToken,getProjectById);
router.post('/',verifyToken,validateMiddleware(projectSchema),createProject);
router.put('/:id',verifyToken,validateMiddleware(projectSchema),updateProject);
router.delete('/:id',verifyToken,validateMiddleware(projectSchema),removeProject);
router.post("/:id/members", verifyToken, roleMiddleware("admin"), addMember);
router.delete("/:id/members", verifyToken, roleMiddleware("admin"), removeMember);

module.exports = router;