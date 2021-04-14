let express = require('express')
let router = express.Router()

const productController = require('../controllers/productController.js')

router.get('/', async (_, res)=>{
    let response = {}
    response = await productController.getProducts()
    res.send(response)
})

module.exports = router