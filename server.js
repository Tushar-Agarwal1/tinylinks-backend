const express = require('express');
const dbConnection = require('./config/Db');
const Url = require('./models/Url');
const app = express();
const urlRoutes = require('./routes/url');
const cors = require('cors');

dbConnection();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());

let counter = 0;
app.use(urlRoutes);




app.listen(8080, () => {
    console.log("server Started");
})