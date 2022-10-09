var express = require('express');
var router = express.Router();
var { store , index, show, destroy, update} = require('../controllers/paymentControllers')

router.post('/', store)
router.get('/', index)
router.get('/:id', show)
router.delete('/:id', destroy)
router.put('/:id', update)

module.exports = router;