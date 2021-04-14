const postgre = require('../utils/postgre')

class ProductService {
    async getProducts(){
        return await postgre.executeQuery('SELECT * FROM products')
    }
}

module.exports = new ProductService()