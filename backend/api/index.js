const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileupload = require("express-fileupload");
const app = express();

console.log(__dirname)
require('dotenv').config({path:'../.env'});

app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileupload());

const PORT = 11323;

// Routes
app.use(require('./routes/produto'));
app.use(require('./routes/genero'));
app.use(require('./routes/user'));

mongoose.connect(process.env.API_CONN_STR, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT}`);
    });
});