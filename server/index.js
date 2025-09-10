require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello From Backend!');
})


app.listen(port, () => {
    console.log(`Express server started at http://localhost:${port}`);
});