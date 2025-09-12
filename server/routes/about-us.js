const express = require("express");
const upload = require("../middlewares/upload");
const {
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
= require('../controllers/about-us');

const router = express.Router();

router.post('/founder-message', upload.single("image"), addFounderMessage);
router.get('/founder-message', getFounderMessage);
router.delete('/founder-message/:id', deleteFounderMessage);

router.post("/legal-advisor", upload.single("image"), addLegalAdvisor);
router.get("/legal-advisor", getLegalAdvisor);
router.delete("/legal-advisor/:id", deleteLegalAdvisor);

router.post("/", upload.single("image"), addAboutUs);
router.get("/", getAboutUs);
router.delete("/:id", deleteAboutUs);

module.exports = router;