const express = require('express')
const router = express.Router()
const { getProduct, getProductTesting } = require('../controllers/controller')

router.route('/').get(getProduct)
router.route('/testing').get(getProductTesting)

module.exports = router;