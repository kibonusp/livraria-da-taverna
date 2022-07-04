const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

cors()
require('dotenv').config();

const PORT = 5432;

// Routes
app.use(require('./routes/produto'));
app.use(require('./routes/genero'));

mongoose.connect(process.env.CONN_STR, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT}`);
    });
});