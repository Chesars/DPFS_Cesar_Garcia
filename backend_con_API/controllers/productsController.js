const { Product, Category } = require('../models');

let productsController = {
    index: function (req, res) {
        res.render('products/products');
    },
    create: async function (req, res) { // Ensure this method is async
        try {
            const categories = await Category.findAll();
            res.render('products/createProduct', { categories });
        } catch (error) {
            res.status(500).send('Error loading form');
        }
    },
    showEditForm: async function (req, res) {
        try {
            const product = await Product.findByPk(req.params.id, {
                include: [Category]
            });
            if (product) {
                res.render('products/updateProduct', { product });
            } else {
                res.status(404).send('Product not found');
            }
        } catch (error) {
            res.status(500).send('Error loading product');
        }
    },
    edit: async function (req, res) {
        try {
            const product = await Product.findByPk(req.params.id);
            if (product) {
                await product.update({
                    name: req.body.name || product.name,
                    description: req.body.description || product.description,
                    price: parseFloat(req.body.price) || product.price,
               /*      categoryId: req.body.category || product.categoryId,
                    image: req.file ? req.file.filename : product.image,
                    stock: parseInt(req.body.stock) || product.stock */
                });
                res.redirect('/products/list');
            } else {
                res.status(404).send('Product not found');
            }
        } catch (error) {
            res.status(500).send('Error updating product');
        }
    },
    list: async (req, res) => {
        try {
            const products = await Product.findAll({
                include: [Category]
            });
            res.render('products/productList', { products });
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    store: async (req, res) => {
        try {
            const newProduct = await Product.create({
                name: req.body.name,
                description: req.body.description,
                price: parseFloat(req.body.price),
                categoryId: req.body.categoryId, // Ensure this is the correct field
                image: req.file ? req.file.filename : '', // If you handle file uploads
                stock: parseInt(req.body.stock)
            });
            res.redirect('/products/list');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    delete: async (req, res) => {
        try {
            await Product.destroy({
                where: { id: req.params.id }
            });
            res.redirect('/products/list');
        } catch (error) {
            res.status(500).send('Error deleting product');
        }
    },
};

module.exports = productsController;
