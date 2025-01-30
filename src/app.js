const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');

const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/books', bookRoutes);

app.use(errorHandler);

module.exports = app;
