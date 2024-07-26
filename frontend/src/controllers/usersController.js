const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const usersFilePath = path.join(__dirname, '../../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {
    profile: (req, res) => {
        const user = req.session.currentUser;
        res.render('profile', { user });
    },
    login: (req, res) => {
        res.render('login');
    },
    loginProcess: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('login', { errors: errors.array() });
        }

        const { email, password } = req.body;
        const user = users.find(user => user.email === email && bcrypt.compareSync(password, user.password));
        if (user) {
            req.session.currentUser = user;
            req.session.userLogged = user;
            return res.redirect('/profile');
        }
        res.render('login', { error: 'Invalid email or password' });
    },
    register: (req, res) => {
        res.render('register');
    },
    createUser: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('register', { errors: errors.array() });
        }

        const { username, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.render('register', { error: 'Passwords do not match' });
        }

        const userExists = users.some(user => user.email === email);

        if (userExists) {
            return res.render('register', { error: 'User already registered' });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = {
            id: users.length ? users[users.length - 1].id + 1 : 1,
            username,
            email,
            password: hashedPassword,
            profilePicture: req.file ? `/uploads/${req.file.filename}` : '/images/default-profile.png',
            joinDate: new Date().toISOString().split('T')[0]
        };

        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');

        req.session.currentUser = newUser;
        req.session.userLogged = newUser;
        res.redirect('/profile');
    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    }
};

module.exports = usersController;