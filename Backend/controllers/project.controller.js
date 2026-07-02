const Project = require("../models/Project");
const createProject = async (req,res) =>{
    try {
    const {name ,description , organization ,deadline, status} = req.body;
    const admin = req.user._id;
    const project = await Project.create({
            name,
            description,
            organization,
            deadline,
            status,
            admin,
            members: [admin]
        });

        return res.status(201).json({
            message:"Project Has been Created Succesfully",
            project
        });

    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
const getAllProjects = async (req,res) =>{
    try {
        const projects = await Project.find({ members: req.user._id });
        if(!projects){
            res.status(400).json({
                message:"Projects Not found"
            });
        }
        return res.status(200).json(projects);
    } catch (err) {
        return res.status(500).json({error:err})
    }
}
const getProjectById = async (req,res) =>{
    try {
        const {id} = req.params;
        const result = await Project.findById(id);
        if(!result){
           return res.status(400).json({
                message:"Project Not Found"
            });
        }
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json({error:err});
    }
}
const updateProject = async (req,res) =>{
    try {
    const {id} = req.params;
    const updatedProject = await Project.findByIdAndUpdate(
        id
        ,req.body
    );
    if(!updatedProject){
        res.status(400).json({
            message:"Project Not Found"
        });
    }
    return res.status(200).json(updatedProject);
    } catch (err) {
       return res.status(500).json({error:err});
    }
}
const removeProject = async (req,res) =>{
    const {id} = req.params;
    const project = await Project.findByIdAndDelete(id);
    if(!project){
        res.status(400).json({
            message:"Project Not Found"
        });
    } 
    return res.status(200).json({
        message:"Product Removed Succesfully",
        project
    });
}

const addMember = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ message: "Project Not Found" });
    if (project.members.includes(userId)) {
      return res.status(400).json({ message: "User Already a Member" });
    }
    project.members.push(userId);
    await project.save();
    return res.status(200).json({ message: "Member Added Successfully", project });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const removeMember = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const project = await Project.findByIdAndUpdate(
      id,
      { $pull: { members: userId } },
      { new: true }
    );
    if (!project) return res.status(404).json({ message: "Project Not Found" });
    return res.status(200).json({ message: "Member Removed Successfully", project });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
module.exports = { createProject, getAllProjects, getProjectById, updateProject, removeProject, addMember, removeMember }