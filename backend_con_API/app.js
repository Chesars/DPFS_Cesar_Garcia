const express = require('express');
const path = require('path');
const sequelize = require('./config/database');
const adminRoutes = require('./routes/admin');
const productsRoutes = require('./routes/products');
const apiRoutes = require('./api/routes/api');
const { initializeAdminAuth, isAdminAuthenticated } = require('./middleware/adminAuth');
const cors = require('cors');

const session = require('express-session');

const flash = require('connect-flash');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Setup session middleware
app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
}));


app.use(flash());

// Initialize admin auth middleware
initializeAdminAuth(app);

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Use admin routes
app.use('/admin', adminRoutes);
// Use products routes
app.use('/products', productsRoutes);
app.use('/api', apiRoutes);

// Root route with middleware
app.get('/', isAdminAuthenticated, (req, res) => {
    res.render('index', { title: 'Admin Panel' });
});

// Sync the models with the database
/* sequelize.sync().then(() => {
    console.log('Database synced');
}).catch((err) => {
    console.error('Error syncing database:', err);
});
 */
// Change the port number if needed
/* const PORT = process.env.PORT || 3060;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); */

module.exports = app;