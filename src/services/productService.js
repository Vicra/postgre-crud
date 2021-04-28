const postgre = require('../utils/postgre')

class ProductService {
    async getProducts(){
        return await postgre.executeQuery('SELECT * FROM products')
    }

    async createProduct(product){
        return await postgre.executeQuery(
            `INSERT INTO products (name, description, price) 
            VALUES ('${product.name}'
                    ,'${product.description}'
                    , ${product.price})`)
    }
}

module.exports = new ProductService()