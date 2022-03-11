const express = require('express');
const checkAuth = require('../middleware/check_auth')

const router = express.Router();

// Db related stuff
const Product = require('../models/product')


// GetAllProducts
router.get('/', checkAuth, (req, res) => {
    Product.find().then((allProds) => {
        res.json(allProds)
    })
})


router.get('/:productId', checkAuth, (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id).then((prod) => {
        res.json(prod)
    })
})


// Postproducts
router.post('/', checkAuth, (req, res) => {
    // const product = {
    //     name: req.body.name,
    //     price: req.body.price
    // }
    // setting into db
    const product = new Product({
        // Generate new id
        // _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })
    // To save the object to the db
    product.save().then((result) => {
        console.log(result);
        console.log("Ravi")
    }).catch(err => console.log(err));
    console.log("Product object created...")


    res.status(201).json({
        message: 'Handle post requests to /products',
        createdProduct: product
    })
})

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId
    res.status(200).json({
        message: `Updated the products ${id}`
    })
})

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId
    res.status(200).json({
        message: `Deleted the products ${id}`
    })
})

router.post('/some', (req, res) => {
    const id = req.query.id
    res.status(200).send({
        id: id
    })
})
module.exports = router;