const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/auth", require("./router/auth.routes"));
// app.use("/api/organizations", require("./routes/organization.routes"));
app.use("/api/projects", require("./router/project.routes"));
app.use("/api/threads", require("./router/thread.routes"));
app.use("/api/messages", require("./router/message.routes"));

// Health check
app.get("/", (req, res) => {
  res.json({ message: "BridgeSpace API is running 🌉" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));