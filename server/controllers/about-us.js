const path = require("path");
const pool = require("../config/connect");

const addFounderMessage = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: "Title & description is required" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    const imageUrl = path.join("/uploads", req.file.filename);

    const [result] = await pool.query(
      "INSERT INTO founder_message (title, description, image) VALUES (?, ?, ?)",
      [title, description, imageUrl]
    );

    return res.status(201).json({
      message: "Founder message created successfully!",
      id: result.insertId,
    });
  } catch (err) {
    console.error("Error while creating", err);
    return res.status(500).json({ error: "Server error" });
  }
};

const getFounderMessage = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM founder_message ORDER BY createdAt DESC");
    return res.status(200).json(rows);
  } catch (err) {
    console.error("Error while fetching founder messages:", err);
    return res.status(500).json({ error: "Server error" });
  }
};


const deleteFounderMessage = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }
    const [existing] = await pool.query("SELECT * FROM founder_message WHERE id = ?", [id]);
    if (existing.length === 0) {
      return res.status(404).json({ error: "Message not found" });
    }

    await pool.query("DELETE FROM founder_message WHERE id = ?", [id]);

    return res.status(200).json({ message: "Founder message deleted successfully!" });
  } catch (err) {
    console.error("Error while deleting founder message:", err);
    return res.status(500).json({ error: "Server error" });
  }
};


const addLegalAdvisor = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: "Title & description is required" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    const imageUrl = path.join("/uploads", req.file.filename);

    const [result] = await pool.query(
      "INSERT INTO legal_advisor (title, description, image) VALUES (?, ?, ?)",
      [title, description, imageUrl]
    );

    return res.status(201).json({
      message: "Legal advisor created successfully!",
      id: result.insertId,
    });
  } catch (err) {
    console.error("Error while creating legal advisor:", err);
    return res.status(500).json({ error: "Server error" });
  }
};


const getLegalAdvisor = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM legal_advisor ORDER BY createdAt DESC");
    return res.status(200).json(rows);
  } catch (err) {
    console.error("Error while fetching legal advisors:", err);
    return res.status(500).json({ error: "Server error" });
  }
};


const deleteLegalAdvisor = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const [existing] = await pool.query("SELECT * FROM legal_advisor WHERE id = ?", [id]);
    if (existing.length === 0) {
      return res.status(404).json({ error: "Legal advisor not found" });
    }

    await pool.query("DELETE FROM legal_advisor WHERE id = ?", [id]);

    return res.status(200).json({ message: "Legal advisor deleted successfully!" });
  } catch (err) {
    console.error("Error while deleting legal advisor:", err);
    return res.status(500).json({ error: "Server error" });
  }
};


const addAboutUs = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: "Title & description are required" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    const imageUrl = path.join("/uploads", req.file.filename);

    const [result] = await pool.query(
      "INSERT INTO about_us (title, description, image) VALUES (?, ?, ?)",
      [title, description, imageUrl]
    );

    return res.status(201).json({
      message: "About Us created successfully!",
      id: result.insertId,
    });
  } catch (err) {
    console.error("Error while creating About Us:", err);
    return res.status(500).json({ error: "Server error" });
  }
};


const getAboutUs = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM about_us ORDER BY createdAt DESC");
    return res.status(200).json(rows);
  } catch (err) {
    console.error("Error while fetching About Us:", err);
    return res.status(500).json({ error: "Server error" });
  }
};


const deleteAboutUs = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const [existing] = await pool.query("SELECT * FROM about_us WHERE id = ?", [id]);
    if (existing.length === 0) {
      return res.status(404).json({ error: "About Us entry not found" });
    }

    await pool.query("DELETE FROM about_us WHERE id = ?", [id]);

    return res.status(200).json({ message: "About Us entry deleted successfully!" });
  } catch (err) {
    console.error("Error while deleting About Us:", err);
    return res.status(500).json({ error: "Server error" });
  }
};


module.exports = {
    addFounderMessage,
    getFounderMessage,
    deleteFounderMessage,
    addLegalAdvisor,
    getLegalAdvisor,
    deleteLegalAdvisor,
    addAboutUs,
    getAboutUs,
    deleteAboutUs,
}