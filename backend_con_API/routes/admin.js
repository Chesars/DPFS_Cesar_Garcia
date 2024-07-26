const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAdminAuthenticated } = require('../middleware/adminAuth');
const methodOverride = require('method-override');

router.use(methodOverride('_method'));

// Route to display admin management section
router.get('/', isAdminAuthenticated, adminController.indexa);

// Route to show register form
router.get('/new', isAdminAuthenticated, adminController.showRegisterForm);
router.post('/create', /* isAdminAuthenticated , */ adminController.createUser);
router.get('/create', adminController.showRegisterForm);

// Route to show edit form
router.get('/edit/:id', isAdminAuthenticated, adminController.showEditForm);
router.put('/edit/:id', isAdminAuthenticated, adminController.edit);

// Route to list admins
router.get('/list', isAdminAuthenticated, adminController.list);


// Route to show login form
router.get('/login', adminController.showLoginForm);
router.post('/login', adminController.login);
router.get('/logout', isAdminAuthenticated,adminController.logout);

// Route to delete an admin
router.post('/delete/:id', isAdminAuthenticated,adminController.delete);


module.exports = router;