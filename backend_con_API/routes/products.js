const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });
const methodOverride = require('method-override');
const { isAdminAuthenticated } = require('../middleware/adminAuth');

// Middleware to override HTTP methods
router.use(methodOverride('_method'));

// Route to display product management section
router.get('/', isAdminAuthenticated,productsController.index);

// Route to show add new product form
router.get('/create', isAdminAuthenticated,productsController.create);
router.post('/create', isAdminAuthenticated,upload.single('image'), productsController.store); // Ensure image upload

// Route to show product edit form
router.get('/edit/:id', isAdminAuthenticated,productsController.showEditForm);
router.put('/edit/:id', isAdminAuthenticated,upload.single('image'), productsController.edit); // Use PUT method

// Route to list products
router.get('/list', isAdminAuthenticated,productsController.list);

// Route to delete product
router.post('/delete/:id', isAdminAuthenticated,productsController.delete);

module.exports = router;
