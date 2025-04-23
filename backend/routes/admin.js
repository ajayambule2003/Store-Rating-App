const express = require('express');
const { getUsers } = require('../controller/adminController');

const router = express.Router();

router.get('/', getUsers);


module.exports = router;