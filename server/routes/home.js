const express = require("express");
const upload = require("../middlewares/upload");
const {
    addServices,
    getServices,
    deleteServices,
    addTvChannels,
    getTvChannels,
    deleteTvChannels,
    addNewsChannels,
    getNewsChannels,
    deleteNewsChannels,
    addHotDealsPackages,
    deleteHotDealsPackages,
    getHotDealsPackages,
    addCelebrityEndorsement,
    getCelebrityEndorsements,
    deleteCelebrityEndorsement,
}
    = require("../controllers/home");

const router = express.Router();

router.post("/services", upload.single("image"), addServices);
router.get("/services", getServices);
router.delete("/services/:id", deleteServices);

router.post('/tv-channels', upload.single("image"), addTvChannels);
router.get('/tv-channels', getTvChannels);
router.delete('/tv-channels/:id', deleteTvChannels);

router.post('/news-channels', upload.single("image"), addNewsChannels);
router.get('/news-channels', getNewsChannels);
router.delete('/news-channels/:id', deleteNewsChannels);

router.post("/hot-deals", upload.single("image"), addHotDealsPackages);
router.get("/hot-deals", getHotDealsPackages);
router.delete("/hot-deals/:id", deleteHotDealsPackages);

router.post("/celebrity-endorsement", upload.single("image"), addCelebrityEndorsement);
router.get("/celebrity-endorsements", getCelebrityEndorsements);
router.delete("/celebrity-endorsement/:id", deleteCelebrityEndorsement);


module.exports = router;
