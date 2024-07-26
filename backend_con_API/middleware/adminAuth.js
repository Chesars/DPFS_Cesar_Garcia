const session = require('express-session');
const Admin = require('../models/admin');

const sessionConfig = session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
});

function initializeAdminAuth(app) {
    app.use(sessionConfig);
    app.use((req, res, next) => {
        res.locals.success_msg = req.flash ? req.flash('success_msg') : null;
        res.locals.error_msg = req.flash ? req.flash('error_msg') : null;
        res.locals.admin = req.session.adminId; // For accessing admin info in views
        next();
    });
}

async function isAdminAuthenticated(req, res, next) {
    if (req.session.adminId) {
        const admin = await Admin.findByPk(req.session.adminId);
        if (admin) {
            return next();
        }
    }
    req.flash('error_msg', 'Please log in to view that resource');
    res.redirect('/admin/login');
}

module.exports = { initializeAdminAuth, isAdminAuthenticated };