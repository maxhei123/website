const express = require('express');
const bodyParser = require('body-parser');
const forumRoutes = require('./api/forum');
const modRoutes = require('./api/mods');
const dbConfig = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
dbConfig.connect();

// Routes
app.use('/api/forum', forumRoutes);
app.use('/api/mods', modRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});