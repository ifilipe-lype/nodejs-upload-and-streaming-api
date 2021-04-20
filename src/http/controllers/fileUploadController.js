const path = require("path");
const multer = require("multer");
const Crypto = require("crypto");

const uploadPath = path.resolve('./src/public/uploads');

function randomStr(size=24){
    return Crypto.randomBytes(size)
        .toString("base64")
        .slice(0, size);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Uploads is the Upload_folder_name
    cb(null, path.join(uploadPath));
  },
  filename: function (req, file, cb) {
    const randomName = randomStr();
    const fileExtension = file.mimetype.split("/")[1];
    cb(null, `${randomName}.${fileExtension}`);
  },
});

const fileUploader = multer({ 
    storage: storage,
    limits: { fileSize:  1 * 1000 * 12000 },
    fileFilter: function (req, file, cb){
        console.log(file)
        // Set the filetypes, it is optional
        let filetypes = /jpeg|jpg|png|mp3|mpeg/;
        let mimetype = filetypes.test(file.mimetype);
  
        let extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        
        if (mimetype && extname) {
            return cb(null, true);
        }
      
        cb("Error: File upload only supports the " + "following filetypes - " + filetypes);
      } 
  
// mypic is the name of file attribute
}).single("file")

function fileUploadController(req, res) {
    fileUploader(req, res, (err) => {
        if(err) return res.status(401).send("Fails to upload file "+err);

        return res.status(201).json({
            filename: req.file.filename,
            filepath: req.file.path
        });
    })
}

module.exports = fileUploadController;
