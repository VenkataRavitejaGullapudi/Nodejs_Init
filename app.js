const express = require('express');
const app = express();






// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("DB_NAME").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });







// Here this middleware added before any request
// to funnel every request (Handles CORS)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-origin', "*")
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type,Accept,Authorization')

    // Browser will always send the options request when you send a post or put request
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Metods', 'PUT,POST,PATCH,DELETE,GET')
        return res.status(200).json({})
    }
    // We added CORS errir handling but, we always blocking
    // our incoming requests to move on to next routes
    next();
})



const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')
const authRoutes = require('./api/routes/user')



// Routes that handle requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', authRoutes);




// This route will be called only if all other routes doesnot match
// It means that the url not found.
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    // Forward this error request instead of the original one
    next(error);
})


// This will handle all kinds of the error
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })

})

module.exports = app