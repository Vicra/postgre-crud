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

    async createProduct(product){
        try {
            // validations
            let errorMessages = []
            if(!product.name)
                errorMessages.push('Parameter name cannot be empty')
            else if(!(typeof product.name === 'string' || product.name instanceof String))
                errorMessages.push('Parameter name must be string')

            if(!product.price)
                errorMessages.push('Parameter name price cannot be empty')
            else if (isNaN(product.price))
                errorMessages.push('Parameter name price must be an integer')

            if(errorMessages.length){
                return {
                    success: false,
                    data: [],
                    message: errorMessages,
                    status: 400
                }    
            }

            await productService.createProduct(product)
        } catch (error) {
            return {
                success: false,
                data: [],
                message: error,
                status: 500
            }
        }
    }
}

module.exports = new ProductController()