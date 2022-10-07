var express = require('express');
var router = express.Router();
var {store, destroy, update} = require("../controllers/tripControolers")
const { index } = require('../controllers/tripControolers');
const { show } = require('../controllers/tripControolers');


router.post('/', store)
router.get('/',index) 
router.get('/:id',show)
router.delete('/:id',destroy)
router.put('/:id',update)

module.exports = router;