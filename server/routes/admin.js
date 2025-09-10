const express = require('express');
const router = express.Router();
const { Signup } = require('../controllers/admin');

router.post('/signup', Signup);

module.exports = router;

