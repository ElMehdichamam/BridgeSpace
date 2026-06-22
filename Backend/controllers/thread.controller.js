const Thread = require("../models/Thread");

const createThread = async (req, res) => {
  try {
    const { title, project, deadline } = req.body;
    const createdBy = req.user._id;
    const thread = await Thread.create({ title, project, deadline, createdBy });
    return res.status(201).json({ message: "Thread Created Successfully", thread });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const getThreadsByProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const threads = await Thread.find({ project: projectId });
    if (!threads) return res.status(404).json({ message: "No Threads Found" });
    return res.status(200).json(threads);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const deleteThread = async (req, res) => {
  try {
    const { id } = req.params;
    const thread = await Thread.findByIdAndDelete(id);
    if (!thread) return res.status(404).json({ message: "Thread Not Found" });
    return res.status(200).json({ message: "Thread Deleted Successfully" });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

module.exports = { createThread, getThreadsByProject, deleteThread };