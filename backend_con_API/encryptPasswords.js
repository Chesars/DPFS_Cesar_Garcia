const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

// Path to the users.json file
const usersFilePath = path.join(__dirname, 'data', 'users.json');

// Function to read users data
const getUsers = () => {
    const data = fs.readFileSync(usersFilePath, 'utf-8');
    return JSON.parse(data);
};

// Function to save users data
const saveUsers = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');
};

// Encrypt passwords
const encryptPasswords = async () => {
    const users = getUsers();

    for (let user of users) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
    }

    saveUsers(users);
    console.log('Passwords encrypted successfully.');
};

// Run the encryption
encryptPasswords();
