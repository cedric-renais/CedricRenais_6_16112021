//---------------//
// Import multer //
const multer = require('multer');
//------------//
// Dictionary //
//------------//
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
};
//----------------------//
// Create config object //
//----------------------//
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  },
});
//----------------//
// Exports multer //
//----------------//
module.exports = multer({ storage: storage }).single('image');
