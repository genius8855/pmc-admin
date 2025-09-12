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
    addAward,
    getAwards,
    deleteAward,
    addGalleryImage,
    getGalleryImages,
    deleteGalleryImage,
    addBanner, 
    getBanners,
    deleteBanner
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
router.get("/celebrity-endorsement", getCelebrityEndorsements);
router.delete("/celebrity-endorsement/:id", deleteCelebrityEndorsement);

router.post("/awards", upload.single("image"), addAward);
router.get("/awards", getAwards);
router.delete("/awards/:id", deleteAward);

router.post("/gallery", upload.single("image"), addGalleryImage);
router.get("/gallery", getGalleryImages);
router.delete("/gallery/:id", deleteGalleryImage);

router.post("/banners", upload.single("image"), addBanner);
router.get("/banners", getBanners);
router.delete("/banners/:id", deleteBanner);

module.exports = router;
