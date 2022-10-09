var express = require('express');
var router = express.Router();
var {store, destroy, update} = require("../controllers/tripControllers")
const { index } = require('../controllers/tripControllers');
const { show } = require('../controllers/tripControllers');


router.post('/', store)
router.get('/',index) 
router.get('/:id',show)
router.delete('/:id',destroy)
router.put('/:id',update)

module.exports = router;