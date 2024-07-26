const bcrypt = require('bcrypt');
const Admin = require('../models/admin');

const adminController = {
    index: (req, res) => {
        res.render('index', { title: 'Admin Management' });
    },
    indexa: function (req, res) {
        res.render('admins/admins',);
    },
    showRegisterForm: (req, res) => {
        res.render('admins/newAdmin', { title: 'Add New Admin' });
    },
    register: async (req, res) => {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newAdmin = await Admin.create({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword
            });
            req.session.adminId = newAdmin.id;
            res.redirect('/admins/list');
        } catch (error) {
            res.status(500).send('Error registering admin');
        }
    },
    
    createUser: async (req, res) => {
        const { username, email, password } = req.body;

        try {
            // Check if user already exists
            const userExists = await Admin.findOne({ where: { email } });

            if (userExists) {
                return res.render('register', { error: 'User already registered' });
            }

            // Hash the password
            const hashedPassword = bcrypt.hashSync(password, 10);

            // Create a new user
            const newUser = await Admin.create({
                username,
                email,
                password: hashedPassword,
                // Profile picture handling not implemented
                joinDate: new Date()
            });

            // Set the session
            req.session.currentUser = newUser;
            req.session.userLogged = newUser;

            console.log('New user created and session updated:', req.session.currentUser);
            res.redirect('/'); // Redirect to the index page
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).render('register', { error: 'Internal server error' });
        }
    },

    
    showLoginForm: (req, res) => {
        res.render('admins/login', { title: 'Admin Login' });
    },
    loginProcess: async (req, res) => {
        const { email, password } = req.body;
        try {
            const admin = await Admin.findOne({ where: { email } });
            if (admin && bcrypt.compareSync(password, admin.password)) {
                req.session.currentAdmin = admin;
                req.session.adminLogged = true;
                console.log('Admin logged in:', admin);
                return res.redirect('/admin');
            }
            res.render('admins/login', { error: 'Invalid email or password' });
        } catch (error) {
            res.status(500).send('Error logging in');
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/admin/login');
    },
    login: async (req, res) => {
        try {
            const admin = await Admin.findOne({ where: { email: req.body.email } });
            if (admin) {
                const match = await bcrypt.compare(req.body.password, admin.password);
                if (match) {
                    req.session.adminId = admin.id;
                    return res.redirect('/admin');
                }
            }
            res.render('admins/login', { error_msg: 'Invalid email or password' });
        } catch (error) {
            res.status(500).send('Error logging in');
        }
    },
    showEditForm: async (req, res) => {
        try {
            // Obtener el administrador por ID
            const admin = await Admin.findByPk(req.params.id);
            if (admin) {
                res.render('admins/updateAdmin', { admin });
            } else {
                res.status(404).send('Admin not found');
            }
        } catch (error) {
            res.status(500).send('Error loading admin');
        }
    },
    edit: async (req, res) => {
        try {
            const admin = await Admin.findByPk(req.params.id);
            if (admin) {
                // Actualizar solo los campos proporcionados
                await admin.update({
                    username: req.body.username || admin.username,
                    email: req.body.email || admin.email,
                    password: req.body.password ? await bcrypt.hash(req.body.password, 10) : admin.password,
                    /*joinDate: req.body.joinDate || admin.joinDate */
                });
                res.redirect('/admin/list'); // Redirige a la lista de administradores
            } else {
                res.status(404).send('Admin not found');
            }
        } catch (error) {
            console.error('Error updating admin:', error);
            res.status(500).send('Error updating admin');
        }
    },
    list: async (req, res) => {
        try {
            const admins = await Admin.findAll();
            res.render('admins/adminList', { title: 'Admins List', admins });
        } catch (error) {
            res.status(500).send('Error loading admins');
        }
    },
    delete: async (req, res) => {
        try {
            // Destroy the Admin entry with the specified ID
            await Admin.destroy({
                where: { id: req.params.id }
            });
            res.redirect('/admin/list'); // Redirect to the list of admins
        } catch (error) {
            console.error('Error deleting admin:', error);
            res.status(500).send('Error deleting admin');
        }
    }
};

module.exports = adminController;