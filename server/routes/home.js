const express = require("express");
const upload = require("../middlewares/upload");
const { 
    addServices,
    getServices,
    deleteServices,
}
= require("../controllers/home");

const router = express.Router();

router.post("/services", upload.single("image"), addServices);
router.get("/services", getServices);
router.delete("/services/:id", deleteServices);

module.exports = router;
