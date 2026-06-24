const express = require("express");

const router = express.Router();

const  validateMiddleware  = require("../middleware/validate.middleware");
const organizationSchema = require("../validators/organization.validator");

const verifyToken = require("../middleware/auth.middleware");

const {createOrganization,getOrganization} = require("../controllers/organization.controller");

router.get('/:id',verifyToken,getOrganization);
router.post('/',verifyToken,validateMiddleware(organizationSchema),createOrganization);

module.exports = router;