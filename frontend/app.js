const express = require('express');
const session = require('express-session');
const path = require('path');
const sequelize = require('./src/config/database'); // Adjust the path as needed
const ecommerceRoutes = require('./src/routes/ecommerce');
const app = express();

// Import models
const User = require('./src/models/user')(sequelize);
const ShoppingCart = require('./src/models/shoppingCart')(sequelize);
const Product = require('./src/models/product')(sequelize);

// Setup middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup session middleware
app.use(session({
    secret: 'yourSecretKey', // Replace with a strong secret key
    resave: false,
    saveUninitialized: true,
}));

// Set view engine
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Use ecommerce routes
app.use('/', ecommerceRoutes);

// Sync Sequelize models and start the server
sequelize.sync({ alter: true }).then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = app;