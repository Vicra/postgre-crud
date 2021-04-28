const express = require('express')
const bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json());

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');
var options = {
    customCss: '.swagger-ui .topbar { display: none }'
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

// api routes
const productRoutes = require('./src/routes/productRoutes')
app.use('/api/product', productRoutes)

// application routes
app.set('port', process.env.PORT || 4000)
app.listen(4000, function () {
    console.log('Server is running.. http://localhost:4000/api-docs')
})