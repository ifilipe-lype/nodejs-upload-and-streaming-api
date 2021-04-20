const router = require("express").Router();

const uploadController = require("./controllers/fileUploadController");
const streamController = require("./controllers/fileStreamController");

router.get("/stream/:filename", streamController);
router.post("/upload", uploadController);

module.exports = router;
