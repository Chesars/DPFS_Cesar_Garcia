// server.js
const app = require('./app'); // Import the app from app.js
const http = require('http');
const cors = require('cors');

const PORT = process.env.PORT || 3060;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
