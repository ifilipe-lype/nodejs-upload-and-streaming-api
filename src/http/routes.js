const router = require("express").Router();

router.get("/stream", (req, res) => {
    res.send("streaming route");
});

router.post("/upload", (req, res) => {
    res.send("uploading route");
});

module.exports = router;
