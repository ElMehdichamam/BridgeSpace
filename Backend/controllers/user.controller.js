const User = require("../models/User");

const searchUsers = async (req, res) => {
  try {
    const { q } = req.query;
    const users = await User.find({
      organization: req.user.organization,
      $or: [
        { username: { $regex: q || "", $options: "i" } },
        { email: { $regex: q || "", $options: "i" } },
      ],
    }).select("-password").limit(20);
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { searchUsers };
