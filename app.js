const express = require('express');
var app = express();

// api routes
const productRoutes = require('./src/routes/productRoutes');
app.use('/api/product', productRoutes);

// application routes
app.set('port', process.env.PORT || 4000);
app.listen(4000, function () {
    console.log('Server is running.. on Port http://localhost:4000/api/product');
});