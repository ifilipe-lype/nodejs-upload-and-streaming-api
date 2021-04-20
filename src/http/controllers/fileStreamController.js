const fs = require("fs");
const path = require("path");

const uploadPath = path.resolve("./src/public/uploads");

function fileStreamController(req, res) {
  const filename = req.params.filename;

  fs.access(path.join(uploadPath, filename), fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).json({
        error: "File not found!",
      });
    }

    const fileSourceStream = fs.createReadStream(path.join(uploadPath, filename));
    fileSourceStream.pipe(res);
  });
}

module.exports = fileStreamController;
