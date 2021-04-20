const router = require("express").Router;

router.get("/stream", (req, res) => {
    console.log("streaming route");
});

router.post("/upload", (req, res) => {
    console.log("uploading route");
});

module.exports = router;
