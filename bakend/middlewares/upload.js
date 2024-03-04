const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './storages');
    },
    filename: function (req, file, cb) {
        //   console.log('file', file)
        cb(null, new Date().toISOString().replace(/:/g, '-') + (file.originalname.replace(/ /g, '')))
    }
});

const upload = multer({ storage: storage });

// Middleware for handling file uploads
const handleFileUpload = upload.single('file'); // Assuming 'file' is the field name

module.exports = {
    upload: upload,
    handleFileUpload: handleFileUpload
};