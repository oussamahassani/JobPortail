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
module.exports = multer({
    storage: storage,
})
