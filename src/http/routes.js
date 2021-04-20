const router = require("express").Router();

const uploadController = require("./controllers/fileUploadController");
const streamController = require("./controllers/fileStreamController");
const downloadController = require("./controllers/fileDownloadController");

router.get("/stream/:filename", streamController);
router.get("/download/:filename", downloadController);
router.post("/upload", uploadController);

module.exports = router;
