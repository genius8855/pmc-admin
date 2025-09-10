require('dotenv').config();
const express = require('express');
const pool = require('./config/connect');
const adminRoute = require('./routes/admin');

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello From Backend!');
});

app.use('/api/admin', adminRoute);

app.listen(port, () => {
    console.log(`Express server started at http://localhost:${port}`);
});