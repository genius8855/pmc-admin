const path = require("path");
const pool = require("../config/connect");

const addServices = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    // Build image path
    const imageUrl = path.join("/uploads", req.file.filename);

    // Save to MySQL
    const [result] = await pool.query(
      "INSERT INTO homeservices (title, image) VALUES (?, ?)",
      [title, imageUrl]
    );

    const newPost = {
      id: result.insertId,
      title,
      image: imageUrl,
      createdAt: new Date(),
    };

    return res.status(201).json({
      message: "Post created successfully!",
      post: newPost,
    });
  } catch (err) {
    console.error("Error creating services:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

const getServices = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM homeservices ORDER BY createdAt DESC");
    return res.status(200).json({ posts: rows });
  } catch (err) {
    console.error("Error fetching services:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

const deleteServices = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ message: "Id is required" });
  }
  try {
    const [result] = await pool.query("DELETE FROM homeservices WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Service not found" });
    }

    return res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Error while deleting:", error);
    return res.status(500).json({ error: "Server error" });
  }
};


module.exports = {
  addServices,
  getServices,
  deleteServices
};
