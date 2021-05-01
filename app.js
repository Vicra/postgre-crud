const express = require('express')

var app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
var options = {
    customCss: '.swagger-ui .topbar { display: none }'
}
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))

// api routes
const productRoutes = require('./src/routes/productRoutes')
app.use('/api/product', productRoutes)

// application routes
app.listen(process.env.PORT || 4000, function () {
    console.log('Server is running.. http://localhost:4000')
})