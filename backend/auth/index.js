const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require('dotenv').config({path:'../.env'});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 12389;

// Routes
app.use(require('./routes/refresh'));

mongoose.connect(process.env.AUTH_CONN_STR, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT}`);
    });
});