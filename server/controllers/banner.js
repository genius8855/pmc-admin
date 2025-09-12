const path = require("path");
const pool = require("../config/connect");

const addBanner = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Banner image is required" });
    }

    const imageUrl = path.join("/uploads", req.file.filename);
    const page = req.params.page;

    const [result] = await pool.query(
      "INSERT INTO banners (image, page) VALUES (?, ?)",
      [imageUrl, page]
    );

    return res.status(201).json({
      message: "Banner added successfully",
      bannerId: result.insertId,
      image: imageUrl,
      page: page,
    });
  } catch (error) {
    console.error("Error adding banner:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

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
    addBanner,
    getBanners,
    deleteBanner,
}