const Project = require("../models/Project");
const createProject = async (req,res) =>{
    try {
    const {name ,description , organization ,deadline} = req.body;
    const admin = req.user._id;
    const project = await Project.create({
            name,
            description,
            organization,
            deadline,
            admin,        
            members: [admin]  
        });

        return res.status(201).json({
            message:"Project Has been Created Succesfully",
            project
        });

    } catch (err) {
        return res.status(500).json({error:err});
    }
}
