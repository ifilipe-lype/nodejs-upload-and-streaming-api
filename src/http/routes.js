const router = require("express").Router();

router.get("/stream/:fileId", (req, res) => {
    res.send(`Streaming ${req.params.fileId} files`);
});

router.post("/upload", (req, res) => {
    res.send("uploading route");
});

module.exports = router;
