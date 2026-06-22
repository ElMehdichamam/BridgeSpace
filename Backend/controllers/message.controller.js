const Message = require("../models/Message");

const createMessage = async (req, res) => {
  try {
    const { content, thread } = req.body;
    const sender = req.user._id;
    const message = await Message.create({ content, thread, sender });
    return res.status(201).json({ message: "Message Sent Successfully", message });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const getMessagesByThread = async (req, res) => {
  try {
    const { threadId } = req.params;
    const messages = await Message.find({ thread: threadId });
    if (!messages) return res.status(404).json({ message: "No Messages Found" });
    return res.status(200).json(messages);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Message.findByIdAndDelete(id);
    if (!message) return res.status(404).json({ message: "Message Not Found" });
    return res.status(200).json({ message: "Message Deleted Successfully" });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

module.exports = { createMessage, getMessagesByThread, deleteMessage };