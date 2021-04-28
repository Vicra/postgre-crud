let express = require('express')
let router = express.Router()

const productController = require('../controllers/productController.js')

router.get('/', async (_, res)=>{
    let response = {}
    response = await productController.getProducts()
    res.send(response)
})

router.post('/', async (req, res)=>{
    let response = {}
    response = await productController.createProduct(req.body)
    res.status(response.status).send(response)
})

module.exports = router