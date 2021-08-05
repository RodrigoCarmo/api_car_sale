require('dotenv/config');
require('../database');
const express = require('express');
require('express-async-errors');

const { router } = require('./index.routes.js');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use(router);


app.listen(process.env.PORT, () => console.log('😎😎Server tá top👌'));


