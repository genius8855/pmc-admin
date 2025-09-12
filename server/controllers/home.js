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
      "INSERT INTO celebrityendorsement (image) VALUES (?)",
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
      "SELECT * FROM celebrityendorsement ORDER BY createdAt DESC"
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
      "DELETE FROM celebrityendorsement WHERE id = ?",
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


const addAward = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Award image is required" });
    }
    const imageUrl = path.join("/uploads", req.file.filename);

    const [result] = await pool.query(
      "INSERT INTO awards (image) VALUES (?)",
      [imageUrl]
    );

    return res.status(201).json({
      message: "Award added successfully",
    });
  } catch (error) {
    console.error("Error adding award:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


const getAwards = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM awards ORDER BY createdAt DESC");
    return res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching awards:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};



const deleteAward = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ message: "Award ID is required" });
  }

  try {
    const [result] = await pool.query("DELETE FROM awards WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Award not found" });
    }
    return res.status(200).json({ message: "Award deleted successfully" });
  } catch (error) {
    console.error("Error deleting award:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


const addGalleryImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Gallery image is required" });
    }
    const imageUrl = path.join("/uploads", req.file.filename);

    const [result] = await pool.query(
      "INSERT INTO gallery (image) VALUES (?)",
      [imageUrl]
    );

    return res.status(201).json({
      message: "Gallery image added successfully",
      galleryId: result.insertId,
      image: imageUrl,
    });
  } catch (error) {
    console.error("Error adding gallery image:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


const getGalleryImages = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM gallery ORDER BY createdAt DESC");
    return res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


const deleteGalleryImage = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ message: "Gallery ID is required" });
  }

  try {
    const [rows] = await pool.query("SELECT image FROM gallery WHERE id = ?", [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Gallery image not found" });
    }

    const [result] = await pool.query("DELETE FROM gallery WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Gallery image not found" });
    }
  
    return res.status(200).json({ message: "Gallery image deleted successfully" });
  } catch (error) {
    console.error("Error deleting gallery image:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const addBanner = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Banner image is required" });
    }

    // Prepare image URL
    const imageUrl = path.join("/uploads", req.file.filename);

    // Insert into banners table
    const [result] = await pool.query(
      "INSERT INTO banners (image) VALUES (?)",
      [imageUrl]
    );

    return res.status(201).json({
      message: "Banner added successfully",
      bannerId: result.insertId,
      image: imageUrl,
    });
  } catch (error) {
    console.error("Error adding banner:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ GET - All Banners
const getBanners = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM banners ORDER BY createdAt DESC");
    return res.json(rows);
  } catch (error) {
    console.error("Error fetching banners:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


const deleteBanner = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Banner ID is required" });
  }
  try {
    const [rows] = await pool.query("SELECT image FROM banners WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Banner not found" });
    }

    const [result] = await pool.query("DELETE FROM banners WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Banner not found" });
    }

    return res.status(200).json({ message: "Banner deleted successfully" });
  } catch (error) {
    console.error("Error deleting banner:", error);
    return res.status(500).json({ error: "Internal Server Error" });
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
  addAward,
  getAwards,
  deleteAward,
  addGalleryImage,
  getGalleryImages,
  deleteGalleryImage,
  addBanner, 
  getBanners,
  deleteBanner
};
