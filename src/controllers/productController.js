const productService = require('../services/productService')

class ProductController {
    async getProducts(){
        try {
            return {
                success: true,
                data: await productService.getProducts()
            }
        } catch (error) {
            return {
                success: false,
                data: [],
                message: error
            }
        }
    }
}

module.exports = new ProductController()