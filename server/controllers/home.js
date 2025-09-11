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
      message: "Services created successfully!",
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

const addTvChannels = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }
    const imageUrl = path.join("/uploads", req.file.filename);

    const [result] = await pool.query(
      "INSERT INTO tvchannels (image) VALUES (?)",
      [imageUrl]
    );
    return res.status(201).json({
      message: "TV channel added successfully",
      channelId: result.insertId,
      image: imageUrl,
    });
  } catch (error) {
    console.error("Error adding TV channel:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteTvChannels = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ error: "Channel ID is required" });
  }
  try {
    const [result] = await pool.query(
      "DELETE FROM tvchannels WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Channel not found" });
    }
    return res.status(200).json({ message: "TV channel deleted successfully" });
  } catch (error) {
    console.error("Error deleting TV channel:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getTvChannels = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM tvchannels ORDER BY id DESC");

    return res.status(200).json({
      message: "TV channels fetched successfully",
      data: rows,
    });
  } catch (error) {
    console.error("Error fetching TV channels:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const addNewsChannels = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }
    const imageUrl = path.join("/uploads", req.file.filename);

    const [result] = await pool.query(
      "INSERT INTO newschannels (image) VALUES (?)",
      [imageUrl]
    );
    return res.status(201).json({
      message: "News channel added successfully",
      channelId: result.insertId,
      image: imageUrl,
    });
  } catch (error) {
    console.error("Error adding News channel:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteNewsChannels = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "Channel ID is required" });
  }
  try {
    const [result] = await pool.query(
      "DELETE FROM newschannels WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Channel not found" });
    }
    return res.status(200).json({ message: "News channel deleted successfully" });
  } catch (error) {
    console.error("Error deleting News channel:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getNewsChannels = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM newschannels ORDER BY id DESC");

    return res.status(200).json({
      message: "News channels fetched successfully",
      data: rows,
    });
  } catch (error) {
    console.error("Error fetching News channels:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const addHotDealsPackages = async (req, res) => {
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
      "INSERT INTO hotdealspackages (title, image) VALUES (?, ?)",
      [title, imageUrl]
    );

    const newPost = {
      id: result.insertId,
      title,
      image: imageUrl,
      createdAt: new Date(),
    };

    return res.status(201).json({
      message: "Hot deals created successfully!",
      post: newPost,
    });
  } catch (err) {
    console.error("Error creating services:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

const getHotDealsPackages = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM hotdealspackages ORDER BY createdAt DESC");
    return res.status(200).json({ posts: rows });
  } catch (err) {
    console.error("Error fetching hot deals:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

const deleteHotDealsPackages = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ message: "Id is required" });
  }
  try {
    const [result] = await pool.query("DELETE FROM hotdealspackages WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Hot Deals not found" });
    }

    return res.status(200).json({ message: "Hot Deals deleted successfully" });
  } catch (error) {
    console.error("Error while deleting:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

const addCelebrityEndorsement = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Celebrity image is required" });
    }
    const imageUrl = path.join("/uploads", req.file.filename);
    const [result] = await pool.query(
      "INSERT INTO celebrity_endorsements (image) VALUES (?)",
      [imageUrl]
    );
      return res.status(201).json({
      message: "Celebrity endorsement added successfully",
    });
  } catch (error) {
    console.error("Error adding celebrity endorsement:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


const getCelebrityEndorsements = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM celebrity_endorsements ORDER BY created_at DESC"
    );
    return res.json(rows);
  } catch (error) {
    console.error("Error fetching celebrity endorsements:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteCelebrityEndorsement = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Id is required" });
  }

  try {
    const [result] = await pool.query(
      "DELETE FROM celebrity_endorsements WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Celebrity endorsement not found" });
    }

    return res.status(200).json({ message: "Celebrity endorsement deleted successfully" });
  } catch (error) {
    console.error("Error while deleting celebrity endorsement:", error);
    return res.status(500).json({ error: "Server error" });
  }
};





module.exports = {
  addServices,
  getServices,
  deleteServices,
  addTvChannels,
  deleteTvChannels,
  getTvChannels,
  addNewsChannels,
  deleteNewsChannels,
  getNewsChannels,
  addHotDealsPackages,
  deleteHotDealsPackages,
  getHotDealsPackages,
  addCelebrityEndorsement,
 getCelebrityEndorsements,
  deleteCelebrityEndorsement,
};
