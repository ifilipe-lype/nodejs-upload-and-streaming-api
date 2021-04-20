const router = require("express").Router();
const uploadController = require("./controllers/fileUploadController");

router.get("/stream/:fileId", (req, res) => {
    res.send(`Streaming ${req.params.fileId} files`);
});

router.post("/upload", uploadController);

module.exports = router;
