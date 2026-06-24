const Organization = require("../models/Organization");

const createOrganization = async (req, res) => {
  try {
    const { name, departments } = req.body;
    const admin = req.user._id;
    const existing = await Organization.findOne({ name });
    if (existing) return res.status(400).json({ message: "Organization Already Exists" });
    const organization = await Organization.create({ name, departments, admin });
    return res.status(201).json({ message: "Organization Created Successfully", organization });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getOrganization = async (req, res) => {
  try {
    const { id } = req.params;
    const organization = await Organization.findById(id).populate("admin", "-password");
    if (!organization) return res.status(404).json({ message: "Organization Not Found" });
    return res.status(200).json(organization);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { createOrganization, getOrganization };