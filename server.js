const express = require('express');
const mongoose = require('mongoose');
// To make a log on the server
const morgan = require('morgan');
// To parse the body of the request
const bodyParser = require('body-parser');
const cors = require('cors')



const app = express()
const port = process.env.PORT || 3000
const db="dbname"
// connection url
const uri = "mongodb+srv://admin:" + process.env.MONGO_ATLAS_PWD + `@cluster0.jjgyu.mongodb.net/${db}?retryWrites=true&w=majority`;
//  To connect to the mongoose using mongo db client.
// //DB CONNECTION
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
};
mongoose
    .connect(uri, connectionParams)
    .then(() => {
        console.log("Connected to database ");
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    });



// To listen the requests and make a log
app.use(morgan('dev'));
// Adding body parser to middleware
// We need to mention that which kind of bodies do we want to parse
// extended false means only simple data is allowed to the urlencoding instead of rich data.

// 
app.use(bodyParser.json());
app.use(cors());


const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')
const authRoutes = require('./api/routes/user')



// Routes that handle requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', authRoutes);
app.get('/test', () => console.log("test"))



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






app.listen(port, () => {
    console.log("Server started")
});