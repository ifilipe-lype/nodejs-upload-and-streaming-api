const fs = require("fs");
const path = require("path");
const mime = require("mime");

const uploadPath = path.resolve("./src/public/uploads");

function fileDownloadController(req, res) {
  const filename = req.params.filename;

  fs.stat(path.join(uploadPath, filename), fs.constants.F_OK, (err, fileStats) => {
    if (err) {
      return res.status(404).json({
        error: "File not found!",
      });
    }

    // configs headers for downloading support
    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', mime.lookup(filename));

    const fileSourceStream = fs.createReadStream(path.join(uploadPath, filename));

    fileSourceStream.pipe(res);
  });
}

module.exports = fileDownloadController;
