require('dotenv').config();
const express = require('express');
const pool = require('./config/connect');
const adminRoute = require('./routes/admin');
const homeRoute = require('./routes/home');
const aboutUsRoute = require('./routes/about-us');
const bannerRoute = require('./routes/banner');

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello From Backend!');
});

app.use('/api/admin', adminRoute);
app.use('/api/home', homeRoute);
app.use('/api/about-us', aboutUsRoute);
app.use('/api/banner', bannerRoute);

app.listen(port, () => {
    console.log(`Express server started at http://localhost:${port}`);
});