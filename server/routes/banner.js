const express = require("express");
const upload = require("../middlewares/upload");
const {
    addBanner,
    getBanners,
    deleteBanner,
}
= require("../controllers/banner");

const router = express.Router();

router.post("/:page", upload.single("image"), addBanner);
router.get("/:page", getBanners);
router.delete("/:page/:id", deleteBanner);

module.exports = router;

