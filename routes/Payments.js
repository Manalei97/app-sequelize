var express = require('express');
var router = express.Router();
var { store } = require('../controllers/paymentControllers')

router.post('/', store)

module.exports = router;