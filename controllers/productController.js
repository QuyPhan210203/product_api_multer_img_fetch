const Product = require('../models/product');																	
																	
// Lấy tất cả sản phẩm																	
exports.getAllProducts = async (req, res) => {																	
try {																	
const products = await Product.find();																	
res.status(200).json(products);																	
} catch (error) {																	
res.status(500).json({ message: error.message });																	
}																	
};																	
																	
// Thêm sản phẩm mới																	
exports.createProduct = async (req, res) => {																	
const product = new Product({																	
name: req.body.name,																	
description: req.body.description,																	
price: req.body.price,																	
image: req.file.path																	
});																	
try {																	
const savedProduct = await product.save();																	
res.status(201).json(savedProduct);																	
} catch (error) {																	
res.status(400).json({ message: error.message });																	
}																	
};																	
																	
// Cập nhật sản phẩm																	
exports.updateProduct = async (req, res) => {																	
try {																	
const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });																	
res.status(200).json(updatedProduct);																	
} catch (error) {																	
res.status(400).json({ message: error.message });																	
}																	
};																	
																	
// Xóa sản phẩm																	
exports.deleteProduct = async (req, res) => {																	
try {																	
await Product.findByIdAndRemove(req.params.id);																	
res.status(204).send();																	
} catch (error) {																	
res.status(500).json({ message: error.message });																	
}																	
};																	