const express = require('express');												
const multer = require('multer');												
const productController = require('../controllers/productController');												
const router = express.Router();												
												
// Cấu hình Multer để upload hình ảnh												
const storage = multer.diskStorage({												
destination: (req, file, cb) => {												
cb(null, 'uploads/');												
},												
filename: (req, file, cb) => {												
cb(null, `${Date.now()}-${file.originalname}`);												
}												
});												
const upload = multer({ storage: storage });												
												
// Định nghĩa các route												
router.get('/', productController.getAllProducts);												
router.post('/', upload.single('image'), productController.createProduct);												
router.put('/:id', productController.updateProduct);												
router.delete('/:id', productController.deleteProduct);												
												
module.exports = router;												