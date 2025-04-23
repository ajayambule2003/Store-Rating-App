const express = require('express');
const { getStores, submitRating, modifyRating, createStore, loginStoreOwner } = require('../controller/storeController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/',protect ,getStores);
// router.get('/', protect, getStores);

router.post('/auth', createStore);      

router.post('/login', loginStoreOwner);  

router.post('/:storeId/rate', protect, submitRating);

router.put('/:storeId/rate', protect, modifyRating);

module.exports = router;

