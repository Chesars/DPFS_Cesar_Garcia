// src/api/controllers/productController.js
const { Product } = require('../../models');

const productController = {
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.findAll();
            res.json(products);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getProductById: async (req, res) => {
        try {
            const product = await Product.findByPk(req.params.id);
            if (product) {
                res.json(product);
            } else {
                res.status(404).send('Product not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = productController;