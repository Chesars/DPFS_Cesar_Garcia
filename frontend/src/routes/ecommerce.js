const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/multerConfig');
const { Product, Category, Brand, Color, Size } = require('../models'); // Import the necessary models
const uploads = require('../middleware/uploads');
const { userRegistrationValidationRules, userLoginValidationRules } = require('../validators');


// Ruta de inicio
router.get('/', async (req, res) => {
    try {
        const products = await Product.findAll({ include: Category });
        res.render('index', { products });
    } catch (err) {
        console.error('Error fetching products from database:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Rutas de usuario
router.get('/profile', authMiddleware, usersController.profile);
router.get('/login', usersController.login);
router.post('/login', userLoginValidationRules(), usersController.loginProcess);
router.get('/register', usersController.register);
router.post('/register', upload.single('profilePicture'), userRegistrationValidationRules(), usersController.createUser);
router.get('/logout', authMiddleware, usersController.logout);


// Ruta de carrito de compras, protegida por middleware
router.get('/shoppingcart', authMiddleware, (req, res) => {
    res.render('productCart');
});

// Ruta de productos
router.get('/products', async (req, res) => {
    try {
        const products = await Product.findAll({ include: Category });
        res.render('products', { products });
    } catch (err) {
        console.error('Error fetching products from database:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Ruta de detalle de producto
router.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id, {
            include: [Category, Brand, Color, Size]
        });
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.render('productDetail', { product });
    } catch (err) {
        console.error('Error fetching product from database:', err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;